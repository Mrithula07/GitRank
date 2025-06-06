import { useEffect, useState } from "react";
import TagFilter from "../components/TagFilter";
import axios from "axios";

const HomePage = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  triggerSearch,
}) => {
  const [selectedTag, setSelectedTag] = useState("DSA");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const tagToQuery = {
    DSA: "DSA",
    "System Design": "system design",
    "Web Dev": "web development stars:>500",
    ML: "machine learning deep learning stars:>1000",
    Amazon: "amazon user:aws stars:>500",
    Google: "google user:google stars:>500",
    Internships: "internships stars:>100",
    FAANG: "FAANG",
  };

  const fetchRepos = async (query, pageNum = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(
          query
        )}+in:name,description&sort=stars&order=desc&per_page=9&page=${pageNum}`
      );
      setRepos(response.data.items);
    } catch (error) {
      console.error("Failed to fetch repos", error);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle tag click
  const handleTagClick = (tag) => {
    setSearchQuery(""); // clear search
    setSelectedTag(tag);
    setPage(1);
    fetchRepos(tagToQuery[tag], 1);
  };

  // Run on tag change
  useEffect(() => {
    if (!searchQuery) {
      fetchRepos(tagToQuery[selectedTag], page);
    }
  }, [selectedTag, page]);

  // Run on search trigger (from Header)
  useEffect(() => {
    if (searchQuery) {
      setSelectedTag(""); // clear tag selection
      setPage(1);
      fetchRepos(searchQuery, 1);
    }
  }, [triggerSearch]);

  return (
    <div className="px-4 py-4">
      <TagFilter onTagClick={handleTagClick} selectedTag={selectedTag} />

      {loading ? (
        <p className="text-center mt-10 text-theme-text">Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {repos.map((repo) => (
              <div key={repo.id} className="card">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={repo.owner.avatar_url}
                    alt={repo.owner.login}
                    height="50px"
                    width="50px"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-theme-text">
                      {repo.name}
                    </h3>
                    <p className="text-sm text-theme-muted">
                      {repo.owner.login}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-theme-muted mb-3">
                  {repo.description?.slice(0, 1500) || "No description"}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-theme-muted mb-2">
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>🍴 {repo.forks_count}</span>
                  <span>💻 {repo.language || "Unknown"}</span>
                  <span>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      View on GitHub
                    </a>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="btn-secondary text-sm rounded-[5px] px-4 py-2"
            >
              Prev
            </button>
            <span className="text-theme-text">Page {page}</span>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="btn-secondary text-sm rounded-[5px] px-4 py-2"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
