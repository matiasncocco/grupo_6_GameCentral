INSERT INTO status_game (id, game_id_status, status_id) VALUES (1, 1, 1);
INSERT INTO status_game (id, game_id_status, status_id) VALUES (2, 1, 2);
INSERT INTO status_game (id, game_id_status, status_id) VALUES (3, 2, 1);
INSERT INTO status_game (id, game_id_status, status_id) VALUES (4, 2, 2);
INSERT INTO status_game (id, game_id_status, status_id) VALUES (5, 4, 2);
INSERT INTO status_game (id, game_id_status, status_id) VALUES (6, 5, 2);
INSERT INTO status_game (id, game_id_status, status_id) VALUES (7, 8, 1);
INSERT INTO status_game (id, game_id_status, status_id) VALUES (8, 8, 2);
INSERT INTO status_game (id, game_id_status, status_id) VALUES (9, 9, 1);
INSERT INTO status_game (id, game_id_status, status_id) VALUES (10, 9, 2);
INSERT INTO status_game (id, game_id_status, status_id) VALUES (11, 10, 2);
INSERT INTO status_game (id, game_id_status, status_id) VALUES (12, 12, 1);
INSERT INTO status_game (id, game_id_status, status_id) VALUES (13, 12, 2);
INSERT INTO status_game (id, game_id_status, status_id) VALUES (14, 13, 1);
INSERT INTO status_game (id, game_id_status, status_id) VALUES (15, 15, 1);
INSERT INTO status_game (id, game_id_status, status_id) VALUES (16, 16, 2);

# QUERY PARA VER RESULTADOS EN WORKBENCH
SELECT status_game.id, games.title AS 'Juego', status.name AS 'Estado'
FROM games
INNER JOIN status_game ON games.id = game_id_status
INNER JOIN status ON status.id = status_id
ORDER BY status_game.id ASC;