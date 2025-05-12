CREATE TABLE posts
(
    post_id      SERIAL PRIMARY KEY,
    slug         VARCHAR(255) NOT NULL UNIQUE,
    title        VARCHAR(255) NOT NULL,
    excerpt      VARCHAR(500),
    content      TEXT         NOT NULL,
    published_at DATE         NOT NULL
);
