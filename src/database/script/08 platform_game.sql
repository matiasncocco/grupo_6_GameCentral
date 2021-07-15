# AGE OF EMPIRES
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (1, 1, 1);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (2, 1, 2);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (3, 1, 3);
# CELESTE
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (4, 2, 1);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (5, 2, 2);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (6, 2, 3);
# HADES
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (7, 3, 1);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (8, 3, 2);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (9, 3, 3);
# HOLLOW KNIGHT
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (10, 4, 1);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (11, 4, 2);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (12, 4, 3);
# MINECRAFT
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (13, 5, 1);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (14, 5, 2);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (15, 5, 3);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (16, 5, 4);
# PORTAL
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (17, 6, 1);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (18, 6, 2);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (19, 6, 3);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (20, 6, 4);
# RAINBOW SIX SIEGE
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (21, 7, 1);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (22, 7, 2);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (23, 7, 3);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (24, 7, 4);
# SEKIRO
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (25, 8, 1);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (26, 8, 2);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (27, 8, 3);
# STARDEW VALLEY
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (28, 9, 1);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (29, 9, 2);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (30, 9, 3);
# TERRARIA
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (31, 10, 1);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (32, 10, 2);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (33, 10, 3);
# CYBERPUNK 2077
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (34, 11, 1);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (35, 11, 2);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (36, 11, 3);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (37, 11, 4);
# SKYRIM
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (38, 12, 1);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (39, 12, 2);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (40, 12, 3);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (41, 12, 4);
# DARK SOULS III
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (42, 13, 1);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (43, 13, 2);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (44, 13, 3);
# THE WITCHER III
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (45, 14, 1);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (46, 14, 2);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (47, 14, 3);
# CUPHEAD
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (48, 15, 1);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (49, 15, 2);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (50, 15, 3);
# FALL GUYS
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (51, 16, 1);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (52, 16, 2);
INSERT INTO platform_game (id, game_id_platform, platform_id) VALUES (53, 16, 3);

# QUERY PARA VER RESULTADOS EN WORKBENCH
SELECT platform_game.id, games.title AS 'Juego', platforms.title AS 'Plataforma'
FROM games
INNER JOIN platform_game ON games.id = game_id_platform
INNER JOIN platforms ON platforms.id = platform_id
ORDER BY platform_game.id ASC;