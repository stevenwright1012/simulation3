INSERT INTO users (username, password, profileImg)
VALUES ($1, $2, $3)
RETURNING *