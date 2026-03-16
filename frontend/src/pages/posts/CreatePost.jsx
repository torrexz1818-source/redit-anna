import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import categories from "../../data/categories";
import { usePosts } from "../../context/PostContext";
import { useAuth } from "../../context/AuthContext";

function CreatePost() {
  const navigate = useNavigate();
  const { addPost } = usePosts();
  const { user } = useAuth();

  const [form, setForm] = useState({
    title: "",
    category: "recommendation",
    content: "",
  });

  const availableCategories = categories.filter((item) => item.value !== "all");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const createdPost = addPost({
      title: form.title,
      category: form.category,
      content: form.content,
      author: {
        name: user?.name || "Usuario Demo",
        company: user?.company || "Empresa no definida",
        position: user?.position || "Cargo no definido",
      },
    });

    navigate(`/post/${createdPost.id}`);
  };

  return (
    <MainLayout>
      <section className="create-post-page">
        <div className="create-post-page__header">
          <h1>Crear publicación</h1>
          <p>
            Comparte una recomendación, tip, experiencia o pregunta con la comunidad.
          </p>
        </div>

        <form className="create-post-form" onSubmit={handleSubmit}>
          <Input
            label="Título"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Escribe un título claro para tu publicación"
            required
          />

          <div className="ui-field">
            <label className="ui-field__label" htmlFor="category">
              Categoría
            </label>
            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="ui-field__control"
              required
            >
              {availableCategories.map((category) => (
                <option key={category.id} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <Input
            label="Contenido"
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Explica tu publicación con el mayor contexto posible"
            required
            as="textarea"
            rows={7}
          />

          <Button type="submit">Publicar</Button>
        </form>
      </section>
    </MainLayout>
  );
}

export default CreatePost;