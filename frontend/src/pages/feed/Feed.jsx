import { useMemo, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/ui/SearchBar";
import FilterTabs from "../../components/feed/FilterTabs";
import PostList from "../../components/feed/PostList";
import categories from "../../data/categories";
import mockPosts from "../../data/mockPosts";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState(mockPosts);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;

      const normalizedSearch = searchTerm.trim().toLowerCase();

      const matchesSearch =
        normalizedSearch === "" ||
        post.title.toLowerCase().includes(normalizedSearch) ||
        post.content.toLowerCase().includes(normalizedSearch) ||
        post.author.name.toLowerCase().includes(normalizedSearch) ||
        post.author.company.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [posts, searchTerm, selectedCategory]);

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <MainLayout>
      <section className="feed-page">
        <div className="feed-page__header">
          <h1>Comunidad</h1>
          <p>
            Descubre recomendaciones, tips, experiencias y preguntas de otros
            profesionales.
          </p>
        </div>

        <div className="feed-page__controls">
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por tema, empresa o autor..."
          />

          <FilterTabs
            categories={categories}
            activeCategory={selectedCategory}
            onChangeCategory={setSelectedCategory}
          />
        </div>

        <PostList posts={filteredPosts} onLike={handleLike} />
      </section>
    </MainLayout>
  );
}

export default Feed;
