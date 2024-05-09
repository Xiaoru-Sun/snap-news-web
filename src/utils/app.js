import axios from "axios";
import Votes from "../Components/Votes";

export const fetchAllArticles = (setLoading, sortby, order) => {
  setLoading(true);
  return axios.get(
    `https://project-nc-news-xiaoru-sun.onrender.com/api/articles?sort_by=${sortby}&&order=${order}`
  );
};

export const fetchSingleArtile = (
  article_id,
  setLoading,
  setArticle,
  setError
) => {
  setLoading(true);
  axios
    .get(
      `https://project-nc-news-xiaoru-sun.onrender.com/api/articles/${article_id}`
    )
    .then((res) => {
      setLoading(false);
      setArticle(res.data.article);
    })
    .catch(() => {
      setError(true);
    });
};

export const fetchComments = (
  article_id,
  setLoading,
  setComments,
  setError
) => {
  setLoading(true);
  axios
    .get(
      `https://project-nc-news-xiaoru-sun.onrender.com/api/articles/${article_id}/comments`
    )
    .then((res) => {
      setLoading(false);
      setComments(res.data.comments);
    })
    .catch(() => {
      setError(true);
    });
};

export const patchArticleVote = (article, voteChange) => {
  return axios.patch(
    `https://project-nc-news-xiaoru-sun.onrender.com/api/articles/${article.article_id}`,
    { inc_votes: voteChange }
  );
};

export const postComment = (article_id, userName, comment) => {
  console.log("in postComment function", article_id, {
    username: userName,
    body: comment,
  });
  return axios.post(
    `https://project-nc-news-xiaoru-sun.onrender.com/api/articles/${article_id}/comments`,
    {
      username: userName,
      body: comment,
    }
  );
};

export const deleteComment = (comment_id) => {
  return axios.delete(
    `https://project-nc-news-xiaoru-sun.onrender.com/api/comments/${comment_id}`
  );
};

export const fetchArticlesByTopic = (topic) => {
  return axios.get(
    `https://project-nc-news-xiaoru-sun.onrender.com/api/articles/?topic=${topic}`
  );
};
