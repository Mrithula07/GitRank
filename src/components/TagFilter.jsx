const tags = [
  "DSA",
  "System Design",
  "Web Dev",
  "ML",
  "Amazon",
  "Google",
  "Internships",
  "FAANG",
];

const TagFilter = ({ onTagClick, selectedTag }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center px-4 py-3">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagClick(tag)}
          className={`text-sm ${
            selectedTag === tag ? "btn-primary" : "btn-secondary"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
