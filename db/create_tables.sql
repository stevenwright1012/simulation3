CREATE TABLE users(
id SERIAL PRIMARY KEY,
username VARCHAR(80) UNIQUE,
password VARCHAR(30),
profileImg text
);

CREATE TABLE posts(
id SERIAL PRIMARY KEY,
message VARCHAR(140)
)