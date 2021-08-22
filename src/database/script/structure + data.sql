CREATE DATABASE  IF NOT EXISTS `game_central` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `game_central`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: game_central
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.19-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'ACTION',NULL,NULL,NULL),(2,'PLATFORMER',NULL,NULL,NULL),(3,'SHOOTER',NULL,NULL,NULL),(4,'FIGHTING',NULL,NULL,NULL),(5,'BEAT EM\' UP',NULL,NULL,NULL),(6,'STEALTH',NULL,NULL,NULL),(7,'SURVIVAL',NULL,NULL,NULL),(8,'RHYTHM',NULL,NULL,NULL),(9,'BATTLE ROYALE',NULL,NULL,NULL),(10,'ACTION-ADVENTURE',NULL,NULL,NULL),(11,'SURVIVAL HORROR',NULL,NULL,NULL),(12,'METROIDVANIA',NULL,NULL,NULL),(13,'ADVENTURE',NULL,NULL,NULL),(14,'TEXT ADVENTURE',NULL,NULL,NULL),(15,'GRAPHIC ADVENTURE',NULL,NULL,NULL),(16,'VISUAL NOVEL',NULL,NULL,NULL),(17,'INTERACTIVE MOVIE',NULL,NULL,NULL),(18,'REAL-TIME 3D ADVENTURE',NULL,NULL,NULL),(19,'ROLE-PLAYING',NULL,NULL,NULL),(20,'ACTION RPG',NULL,NULL,NULL),(21,'MMORPG',NULL,NULL,NULL),(22,'ROGUELIKE',NULL,NULL,NULL),(23,'TACTICAL RPG',NULL,NULL,NULL),(24,'SANDBOX RPG',NULL,NULL,NULL),(25,'FIRST-PERSON PARTY-BASED RPG',NULL,NULL,NULL),(26,'JRPG',NULL,NULL,NULL),(27,'MONSTER TAMER',NULL,NULL,NULL),(28,'SIMULATION',NULL,NULL,NULL),(29,'CONSTRUCTION AND MANAGEMENT',NULL,NULL,NULL),(30,'LIFE SIMULATION',NULL,NULL,NULL),(31,'VEHICLE SIMULATION',NULL,NULL,NULL),(32,'STRATEGY',NULL,NULL,NULL),(33,'4X GAME',NULL,NULL,NULL),(34,'ARTILLERY',NULL,NULL,NULL),(35,'AUTO BATTLER (AUTO CHESS)',NULL,NULL,NULL),(36,'MOBA',NULL,NULL,NULL),(37,'REAL-TIME STRATEGY',NULL,NULL,NULL),(38,'REAL-TIME TACTICS',NULL,NULL,NULL),(39,'TURN-BASED TACTICS',NULL,NULL,NULL),(40,'WARGAME',NULL,NULL,NULL),(41,'GRAND STRATEGY WARGAME',NULL,NULL,NULL),(42,'SPORTS',NULL,NULL,NULL),(43,'RACING',NULL,NULL,NULL),(44,'SPORTS',NULL,NULL,NULL),(45,'COMPETITIVE',NULL,NULL,NULL),(46,'SPORTS-BASED FIGHTING',NULL,NULL,NULL),(47,'MMO',NULL,NULL,NULL),(48,'BOARD',NULL,NULL,NULL),(49,'CARD',NULL,NULL,NULL),(50,'CASINO',NULL,NULL,NULL),(51,'CASUAL',NULL,NULL,NULL),(52,'GACHA',NULL,NULL,NULL),(53,'HORROR',NULL,NULL,NULL),(54,'IDLE',NULL,NULL,NULL),(55,'LOGIC',NULL,NULL,NULL),(56,'PARTY',NULL,NULL,NULL),(57,'PHOTOGRAPHY',NULL,NULL,NULL),(58,'PROGRAMMING',NULL,NULL,NULL),(59,'SOCIAL DEDUCTION',NULL,NULL,NULL),(60,'TRIVIA',NULL,NULL,NULL),(61,'TYPING',NULL,NULL,NULL),(62,'ART',NULL,NULL,NULL),(63,'CASUAL',NULL,NULL,NULL),(64,'EDUCATIONAL',NULL,NULL,NULL),(65,'SANDBOX',NULL,NULL,NULL),(66,'CREATIVE',NULL,NULL,NULL),(67,'OPEN WORLD',NULL,NULL,NULL),(68,'CITY BUILDER',NULL,NULL,NULL),(69,'MULTIPLAYER',NULL,NULL,NULL),(70,'PRECISION PLATFORMER',NULL,NULL,NULL),(71,'DIFFICULT',NULL,NULL,NULL),(72,'GREAT SOUNDTRACK',NULL,NULL,NULL),(73,'PIXEL GRAPHICS',NULL,NULL,NULL),(74,'INDIE',NULL,NULL,NULL),(75,'RPG',NULL,NULL,NULL),(76,'SOULS-LIKE',NULL,NULL,NULL),(77,'FIRST-PERSON',NULL,NULL,NULL),(78,'SINGLEPLAYER',NULL,NULL,NULL),(79,'PUZZLE',NULL,NULL,NULL),(80,'FIRST-PERSON SHOOTER',NULL,NULL,NULL),(81,'TACTICAL',NULL,NULL,NULL),(82,'TEAM-BASED',NULL,NULL,NULL),(83,'FARMING SIM',NULL,NULL,NULL),(84,'CYBERPUNK',NULL,NULL,NULL),(85,'SCI-FI',NULL,NULL,NULL),(86,'DARK FANTASY',NULL,NULL,NULL),(87,'STORY RICH',NULL,NULL,NULL),(88,'ATMOSPHERIC',NULL,NULL,NULL),(89,'CARTOON',NULL,NULL,NULL),(90,'FUNNY',NULL,NULL,NULL),(91,'ONLINE CO-OP',NULL,NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_game`
--

DROP TABLE IF EXISTS `category_game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category_game` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `game_id_category` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `game_id_category_idx` (`game_id_category`),
  KEY `category_id_idx` (`category_id`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `game_id_category` FOREIGN KEY (`game_id_category`) REFERENCES `games` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_game`
--

LOCK TABLES `category_game` WRITE;
/*!40000 ALTER TABLE `category_game` DISABLE KEYS */;
INSERT INTO `category_game` VALUES (1,1,32,NULL,NULL),(2,1,37,NULL,NULL),(3,1,68,NULL,NULL),(4,1,69,NULL,NULL),(5,2,70,NULL,NULL),(6,2,71,NULL,NULL),(7,2,72,NULL,NULL),(8,2,73,NULL,NULL),(9,3,1,NULL,NULL),(10,3,74,NULL,NULL),(11,3,22,NULL,NULL),(12,3,75,NULL,NULL),(13,4,12,NULL,NULL),(14,4,76,NULL,NULL),(15,4,2,NULL,NULL),(16,4,72,NULL,NULL),(17,5,7,NULL,NULL),(18,5,13,NULL,NULL),(19,5,66,NULL,NULL),(20,5,67,NULL,NULL),(21,6,79,NULL,NULL),(22,6,2,NULL,NULL),(23,6,77,NULL,NULL),(24,6,78,NULL,NULL),(25,7,80,NULL,NULL),(26,7,69,NULL,NULL),(27,7,81,NULL,NULL),(28,7,82,NULL,NULL),(29,8,76,NULL,NULL),(30,8,71,NULL,NULL),(31,8,1,NULL,NULL),(32,8,78,NULL,NULL),(33,9,83,NULL,NULL),(34,9,30,NULL,NULL),(35,9,75,NULL,NULL),(36,9,73,NULL,NULL),(37,10,67,NULL,NULL),(38,10,7,NULL,NULL),(39,10,65,NULL,NULL),(40,10,69,NULL,NULL),(41,11,84,NULL,NULL),(42,11,67,NULL,NULL),(43,11,75,NULL,NULL),(44,11,85,NULL,NULL),(45,12,67,NULL,NULL),(46,12,75,NULL,NULL),(47,12,13,NULL,NULL),(48,12,78,NULL,NULL),(49,13,76,NULL,NULL),(50,13,86,NULL,NULL),(51,13,71,NULL,NULL),(52,13,75,NULL,NULL),(53,14,67,NULL,NULL),(54,14,75,NULL,NULL),(55,14,87,NULL,NULL),(56,14,88,NULL,NULL),(57,15,71,NULL,NULL),(58,15,89,NULL,NULL),(59,15,2,NULL,NULL),(60,15,72,NULL,NULL),(61,16,69,NULL,NULL),(62,16,90,NULL,NULL),(63,16,9,NULL,NULL),(64,16,91,NULL,NULL);
/*!40000 ALTER TABLE `category_game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(15,2) unsigned NOT NULL,
  `discount` int(10) unsigned DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'AGE OF EMPIRES II','1623036797015.jpg',299.00,0,'Age of Empires II: Definitive Edition conmemora el 20 aniversario de uno de los juegos de estrategia más aclamados de todos los tiempos, en una versión que ofrece impactantes gráficos 4K Ultra HD, una pista sonora completamente remasterizada y contenido totalmente nuevo, como “Los últimos Khanes”, que cuenta con 3 campañas y 4 civilizaciones.\r\n\r\nExplora todas las campañas originales como nunca antes y revive las expansiones más vendidas. Sumérgete en más de 200 horas de juego y recorre mil años de la historia de la humanidad. Juega en línea y desafía a otros jugadores con 35 civilizaciones diferentes, ¿podrás conquistar el mundo a lo largo del tiempo?\r\n\r\nElige tu camino hacia la grandeza en esta edición remasterizada definitiva de uno de los juegos de estrategia más queridos de todos los tiempos.\r\n',NULL,'2021-07-28 03:13:04',NULL),(2,'CELESTE','1623036931738.webp',224.00,20,'Ayuda a Madeline a sobrevivir a los demonios de su interior en su viaje a la cima de la montaña Celeste; un ajustadísimo plataforma diseñado a mano por los creadores del clásico multijugador TowerFall.\r\n\r\nAventura de un jugador marcada por la narración; un encantador elenco de personajes y un argumento conmovedor de descubrimiento personal.\r\nGran montaña con más de 700 pantallas de duros desafíos y retorcidos secretos.\r\nBrutales capítulos \"cara B\" para desbloquear; para los más osados.\r\nFinalista en “Excellence in Audio” de IGF; más de 2 horas de música original con un asombroso piano y pegadizos ritmos de sintetizador.\r\n\r\nLos mandos son sencillos y accesibles: salta, acelera en el aire y escala, pero con varias capas de profundidad de expresión que habrá que dominar, pues cada muerte enseña una lección. Las reapariciones relámpago te permiten seguir escalando mientras desvelas misterios y te enfrentas a numerosos peligros.\r\n\r\nEs el momento, Madeline. Respira hondo. Tú puedes hacerlo.',NULL,NULL,NULL),(3,'HADES','1623037310936.jpg',279.99,35,'Hades es un juego roguelike de exploración de mazmorras que combina los mejores aspectos de los aclamados títulos anteriores de Supergiant, como la acción rápida de Bastion, la atmósfera y la profundidad de Transistor y la narrativa centrada en los personajes de Pyre.\r\nCOMBATE PARA ESCAPAR DEL INFIERNO\r\nComo el príncipe inmortal del Inframundo, tendrás a tu disposición los poderes y las armas míticas del Olimpo para liberarte de las garras del mismísimo dios de los muertos, al tiempo que te vas haciendo más fuerte y descubres más piezas de la historia con cada intento de fuga.\r\nDESATA LA IRA DEL OLIMPO\r\n¡Los dioses del Olimpo están de tu lado! Conoce a Zeus, Atenea, Poseidón y muchos más, y elige entre decenas de poderosas bendiciones que potenciarán tus habilidades. Hay miles de arquetipos de personaje viables que irás descubriendo a medida que juegues.',NULL,NULL,NULL),(4,'HOLLOW KNIGHT','1623037405601.jpg',179.99,20,'Enfréntate a las profundidades de un reino olvidado\r\nBajo la deteriorada ciudad de Petrópolis yace un antiguo reino en ruinas. A muchos les atrae la vida bajo la superficie y van en busca de riquezas, gloria o respuestas a viejos enigmas.\r\n\r\nHollow Knight es una aventura de acción clásica en 2D ambientada en un vasto mundo interconectado. Explora cavernas tortuosas, ciudades antiguas y páramos mortales. Combate contra criaturas corrompidas, haz amistad con extraños insectos y resuelve los antiguos misterios que yacen en el corazón de reino.',NULL,NULL,NULL),(5,'MINECRAFT','1623037523681.jpg',284.00,NULL,'Explora mundos generados al azar y construye cosas increíbles, desde la más humilde de las casas hasta el más majestuoso de los castillos. Juega en el modo creativo con recursos ilimitados o extrae en las profundidades del mundo, crea armas y armaduras para defenderte de enemigos peligrosos en el modo supervivencia.\r\n\r\nCARACTERÍSTICAS\r\nPacks de aspecto, textura y popurrí de la comunidad. Más información en minecraft.net/marketplace.\r\n\r\n¡COMPLEMENTOS! Visita minecraft.net/addons, allí podrás probar varios ejemplos gratuitos o aprender a crear uno propio.\r\n\r\n¡Realms! Juega multiplataforma con hasta 10 amigos en un mundo que existe en todo momento y lugar. Pruébalo gratis durante 30 días desde la aplicación. Puedes obtener más información en http://minecraft.net/realms.\r\n\r\nSoporte de Xbox Live (incluye logros)\r\n\r\nJuego entre plataformas para un máximo de ocho jugadores en PC con Windows 10, dispositivos Android, teléfonos y tablets con iOS, Xbox One y plataformas de realidad virtual.',NULL,NULL,NULL),(6,'PORTAL','1623037735638.webp',129.00,50,'Portal™ es la nueva aventura para un solo jugador de Valve. Ambientado en los misteriosos laboratorios de Aperture Science, Portal ha sido calificado como uno de los juegos más innovadores de los últimos tiempos y ofrece incontables horas de rompecabezas nunca vistos.\r\n\r\nEl juego está diseñado para cambiar radicalmente el modo en que los jugadores enfocan, sopesan y reaccionan a las circunstancias en un entorno determinado, al igual que la pistola antigravedad abrió un nuevo mundo de posibilidades a la hora de manipular objetos.\r\n\r\nLos jugadores deben resolver rompecabezas y desafíos basados en las leyes físicas abriendo portales y desplazando objetos, o incluso sus propios avatares, a través del espacio.',NULL,NULL,NULL),(7,'RAINBOW SIX SIEGE','1623037830924.jpg',999.00,NULL,'Domina el arte de la destrucción y el uso de dispositivos en Tom Clancy\'s Rainbow Six Siege. Enfréntate a un combate intenso de rango cercano altamente letal, con decisiones tácticas, juego en equipo y una acción explosiva en todo momento. Vive un nuevo estilo de tiroteos y estrategia nacida en el seno del rico legado de los anteriores juegos Tom Clancy\'s Rainbow Six.\r\n\r\n\r\nEmbárcate en un nuevo tipo de asalto usando un nivel de destrucción y unos dispositivos nunca vistos.\r\nEn defensa, coordina tus acciones con tu equipo para transformar tu entorno en una fortaleza. Pon trampas, refuerza lugares y crea sistemas de defensa para evitar que el enemigo abra brecha.\r\nEn ataque, lidera tu grupo a través de estrechos pasillos, pasos de puerta reforzados y paredes con barricadas. Combina mapas tácticos, drones de vigilancia, acciones de rápel y otros movimientos para planificar, atacar y dominar cualquier situación.\r\n\r\n\r\nElige entre docenas de agentes altamente entrenados, provenientes de las mejores.',NULL,NULL,NULL),(8,'SEKIRO','1623037926110.jpg',1299.00,NULL,'Esta Edición juego del año ahora incluye contenido adicional*:\r\n\r\n- Recuerdo y Reto de fuerza: nuevos modos de desafío de jefe\r\n- Vestigios: deja mensajes y grabaciones de tus acciones para que otros jugadores las vean y califiquen\r\n- 3 aspectos desbloqueables\r\n\r\nJuego del año - The Game Awards 2019\r\nMejor juego de acción de 2019 - IGN\r\nMás de 50 premios y nominaciones\r\n\r\nTraza tu propio camino hacia la venganza en la galardonada aventura de FromSoftware, creadores de la saga Dark Souls.\r\n\r\nEn Sekiro™: Shadows Die Twice encarnas al \'lobo manco\', un guerrero desfigurado y caído en desgracia que ha sido rescatado al borde de la muerte. Tras jurar proteger a un joven señor descendiente de un antiguo linaje, te conviertes en el objetivo de despiadados enemigos, entre ellos el peligroso clan Ashina. Cuando el joven señor sea capturado, nada te detendrá en tu peligrosa aventura por restituir tu honor, ni siquiera la muerte.\r\n\r\nExplora el Japón de la era Sengoku de finales del siglo XVI, un brutal periodo.',NULL,NULL,NULL),(9,'STARDEW VALLEY','1623038023755.png',179.00,10,'Te vas a vivir al valle...\r\n\r\nAcabas de heredar la vieja parcela agrícola de tu abuelo de Stardew Valley. Decides partir hacia una nueva vida con unas herramientas usadas y algunas monedas. ¿Te ves capaz de vivir de la tierra y convertir estos campos descuidados en un hogar próspero?\r\n\r\n¡Crea la granja de tus sueños! Constrúyela desde cero en una de las cinco configuraciones del mapa.\r\n¡Domina tu habilidad con la ganadería! Cría animales, siembra cultivos y fabrica maquinaria útil entre muchas más cosas.\r\n¡Únete a la comunidad local! Entabla amistad con más de 30 habitantes de Pelican Town.\r\n¡Personaliza a tu granjero! Podrás elegir entre cientos de opciones de personalización de personajes.\r\n¡Instálate y empieza a formar una familia! Comparte tu vida en la granja con uno de los doce personajes con los que podrás tener una relación.\r\n¡Explora grandes y misteriosas cuevas! Encuentra monstruos peligrosos y tesoros valiosos.',NULL,NULL,NULL),(10,'TERRARIA','1623038128066.jpg',129.00,20,'¡Cava, lucha, explora, construye! Nada es imposible en este juego de aventuras repleto de acción. El mundo es tu lienzo y la tierra misma es tu pintura.\r\n¡Coge tus herramientas y adelante! Crea armas para deshacerte de una gran variedad de enemigos en numerosos ecosistemas. Excava profundo bajo tierra para encontrar accesorios, dinero y otras cosas muy útiles. Reúne recursos para crear todo lo que necesites y conformar así tu propio mundo. Construye una casa, un fuerte o incluso un castillo. La gente se mudará a vivir ahí e incluso quizás te vendan diferentes mercancías que te ayuden en tu viaje.\r\nPero ten cuidado, aún te aguardan más desafíos... ¿Estás preparado para la tarea?\r\nCaracterísticas principales:\r\nJugabilidad \"sandbox\" (juega libremente en un mundo a tu disposición)\r\nMundos generados de forma aleatoria\r\nActualizaciones gratuitas de contenido',NULL,NULL,NULL),(11,'CYBERPUNK 2077','1623072654720.jpg',2199.00,80,'Cyberpunk 2077 es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alcanzar la inmortalidad. Podrás personalizar las mejoras cibernéticas, las habilidades y el estilo de juego del personaje para dar forma a un mundo y a una historia que depende de tus decisiones.\r\n\r\nJUEGA COMO UN MERCENARIO AL MARGEN DE LA LEY\r\nConviértete en un cyberpunk, un mercenario urbano equipado con mejoras cibernéticas y crea tu leyenda en las calles de Night City.\r\n\r\nDESCUBRE LA CIUDAD DEL FUTURO\r\nSumérgete en el inmenso mundo abierto de Night City, una ciudad que establece una nueva referencia en calidad visual, complejidad y profundidad.\r\n\r\nROBA EL IMPLANTE QUE CONCEDE LA VIDA ETERNA\r\nAcepta el trabajo más peligroso de tu vida y ve en busca del prototipo que permite acceder a la inmortalidad.',NULL,NULL,NULL),(12,'SKYRIM','1623201090625.jpg',625.00,NULL,'Skyrim Special Edition, ganador de más de 200 premios al \"Juego del año\", da vida a la fantasía épica con un nivel de detalle asombroso. La Special Edition incluye el juego aclamado por la crítica y los complementos, así como nuevas características: gráficos y efectos renovados, rayos crepusculares volumétricos, reflejos en tiempo real, profundidad de campo dinámica y muchas más. Además, Skyrim Special Edition lleva todo el poder de los mods a PC y Xbox One: nuevas misiones, entornos, personajes, diálogos, armaduras y armas, entre otras muchas cosas. ¡Con los mods, la experiencia no tiene límites!',NULL,NULL,NULL),(13,'DARK SOULS III','1623799991402.jpg',649.00,10,'Dark Souls continúa redefiniendo los límites con el nuevo y ambicioso capítulo de esta serie revolucionaria, tan aclamada por la crítica. ¡Prepárate para sumergirte en la oscuridad!\r\n\r\n¡Consigue ahora mismo el Season Pass de DARK SOULS™ III y ponte a prueba con todo el contenido disponible!\r\n\r\n\"Mejor juego de rol\" de la Gamescom 2015 y más de 35 premios y nominaciones en la E3 2015.\r\n\r\nDARK SOULS™ III continúa redefiniendo los límites con el nuevo y ambicioso capítulo de esta serie revolucionaria, tan aclamada por la crítica.\r\n\r\nAdéntrate en un universo lleno de enemigos y entornos descomunales, un mundo en ruinas en el que las llamas se están apagando. Los jugadores se sumergirán en la atmósfera épica de un mundo de oscuridad gracias a un juego más rápido y una intensidad de combate ampliada. Tanto fans como recién llegados disfrutarán de una acción gratificante y gráficos absorbentes.\r\nSolo quedan las ascuas... ¡Prepárate una vez más para sumergirte en la oscuridad!',NULL,NULL,NULL),(14,'THE WITCHER III','1623854229466.jpg',479.00,NULL,'The Witcher: Wild Hunt es un RPG de mundo abierto basado en la narrativa y ambientado en un universo de fantasía visualmente impresionante, repleto de decisiones significativas y consecuencias trascendentales. En The Witcher, te pones en la piel del cazador de monstruos profesional Geralt de Rivia, y tienes la tarea de encontrar a la niña de la profecía en un vasto mundo abierto repleto de ciudades de mercaderes, islas piratas, peligrosos pasos de montaña y cuevas olvidadas para explorar.\r\nCARACTERÍSTICAS PRINCIPALES\r\nCONVIÉRTETE EN UN EXPERTO CAZADOR DE MONSTRUOS A SUELDO\r\nAdiestrados desde su infancia y mutados para obtener habilidades, fuerza y reflejos sobrehumanos, los brujos sirven como contrapeso al mundo infestado de monstruos en el que viven.\r\n\r\nDestruye a tus enemigos de formas espantosas como cazador de monstruos profesional, armado con una gran variedad de armas mejorables, pociones de mutación y magia de combate.\r\nDa caza a una amplia gama de monstruos exóticos: desde bestias salvajes que merodean por los pasos de montaña, hasta astutos depredadores sobrenaturales que acechan en las sombras de ciudades densamente pobladas.\r\nInvierte tus recompensas en mejorar tus armas y comprar armaduras personalizadas, o gástatelas en carreras de caballos, juegos de cartas, peleas a puñetazos y otros placeres que te ofrece la noche.',NULL,NULL,NULL),(15,'CUPHEAD','1623889097777.jpg',224.00,23,'Cuphead es un juego de acción clásico estilo \"dispara y corre\" que se centra en combates contra el jefe. Inspirado en los dibujos animados de los años 30, los aspectos visual y sonoro están diseñados con esmero empleando las mismas técnicas de la época, es decir, animación tradicional a mano, fondos de acuarela y grabaciones originales de jazz.\r\n\r\nJuega como Cuphead o Mugman (en modo de un jugador o cooperativo) y cruza mundos extraños, adquiere nuevas armas, aprende poderosos supermovimientos y descubre secretos ocultos mientras procuras saldar tu deuda con el diablo.',NULL,NULL,NULL),(16,'FALL GUYS','1624416547403.jpg',720.00,NULL,'Fall Guys es un juego multijugador masivo tipo party con hasta 60 jugadores online en un enfrentamiento todos contra todos que se desarrolla ronda tras ronda entre un caos creciente hasta que solo queda un único vencedor.\r\n\r\nFall Guys: Ultimate Knockout enfrenta a hordas de contendientes online en un alocado enfrentamiento que se desarrolla ronda tras ronda entre un caos creciente hasta que solo queda un único vencedor. Supera obstáculos estrafalarios, ábrete paso entre competidores revoltosos y vence a las inflexibles leyes de la física en tu accidentado camino a la grandeza. ¡Deja la dignidad en la entrada y prepárate para sufrir descacharrantes fracasos en tu intento de reclamar la corona!\r\n\r\nDesmadre masivo online: sumérgete en una serie de ridículos desafíos y delirantes circuitos de obstáculos con montones de competidores online, todos con la esperanza de superar el corte y avanzar a la siguiente ronda de caos.',NULL,NULL,NULL);
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `platform_game`
--

DROP TABLE IF EXISTS `platform_game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `platform_game` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `game_id_platform` int(11) DEFAULT NULL,
  `platform_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `game_id_platform_idx` (`game_id_platform`),
  KEY `platform_id_idx` (`platform_id`),
  CONSTRAINT `game_id_platform` FOREIGN KEY (`game_id_platform`) REFERENCES `games` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `platform_id` FOREIGN KEY (`platform_id`) REFERENCES `platforms` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `platform_game`
--

LOCK TABLES `platform_game` WRITE;
/*!40000 ALTER TABLE `platform_game` DISABLE KEYS */;
INSERT INTO `platform_game` VALUES (1,1,1,NULL,NULL),(2,1,2,NULL,NULL),(3,1,3,NULL,NULL),(4,2,1,NULL,NULL),(5,2,2,NULL,NULL),(6,2,3,NULL,NULL),(7,3,1,NULL,NULL),(8,3,2,NULL,NULL),(9,3,3,NULL,NULL),(10,4,1,NULL,NULL),(11,4,2,NULL,NULL),(12,4,3,NULL,NULL),(13,5,1,NULL,NULL),(14,5,2,NULL,NULL),(15,5,3,NULL,NULL),(16,5,4,NULL,NULL),(17,6,1,NULL,NULL),(18,6,2,NULL,NULL),(19,6,3,NULL,NULL),(20,6,4,NULL,NULL),(21,7,1,NULL,NULL),(22,7,2,NULL,NULL),(23,7,3,NULL,NULL),(24,7,4,NULL,NULL),(25,8,1,NULL,NULL),(26,8,2,NULL,NULL),(27,8,3,NULL,NULL),(28,9,1,NULL,NULL),(29,9,2,NULL,NULL),(30,9,3,NULL,NULL),(31,10,1,NULL,NULL),(32,10,2,NULL,NULL),(33,10,3,NULL,NULL),(34,11,1,NULL,NULL),(35,11,2,NULL,NULL),(36,11,3,NULL,NULL),(37,11,4,NULL,NULL),(38,12,1,NULL,NULL),(39,12,2,NULL,NULL),(40,12,3,NULL,NULL),(41,12,4,NULL,NULL),(42,13,1,NULL,NULL),(43,13,2,NULL,NULL),(44,13,3,NULL,NULL),(45,14,1,NULL,NULL),(46,14,2,NULL,NULL),(47,14,3,NULL,NULL),(48,15,1,NULL,NULL),(49,15,2,NULL,NULL),(50,15,3,NULL,NULL),(51,16,1,NULL,NULL),(52,16,2,NULL,NULL),(53,16,3,NULL,NULL);
/*!40000 ALTER TABLE `platform_game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `platforms`
--

DROP TABLE IF EXISTS `platforms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `platforms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `platforms`
--

LOCK TABLES `platforms` WRITE;
/*!40000 ALTER TABLE `platforms` DISABLE KEYS */;
INSERT INTO `platforms` VALUES (1,'WINDOWS',NULL,NULL,NULL),(2,'MAC OS',NULL,NULL,NULL),(3,'LINUX',NULL,NULL,NULL),(4,'VR HEADSET',NULL,NULL,NULL);
/*!40000 ALTER TABLE `platforms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'RELEVANT',NULL,NULL,NULL),(2,'IN OFFER',NULL,NULL,NULL);
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status_game`
--

DROP TABLE IF EXISTS `status_game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status_game` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `game_id_status` int(11) DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `game_id_idx` (`game_id_status`),
  KEY `status_id_idx` (`status_id`),
  CONSTRAINT `game_id_status` FOREIGN KEY (`game_id_status`) REFERENCES `games` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `status_id` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status_game`
--

LOCK TABLES `status_game` WRITE;
/*!40000 ALTER TABLE `status_game` DISABLE KEYS */;
INSERT INTO `status_game` VALUES (1,1,1,NULL,NULL),(2,2,1,NULL,NULL),(3,2,2,NULL,NULL),(4,3,2,NULL,NULL),(5,4,2,NULL,NULL),(6,5,1,NULL,NULL),(7,6,2,NULL,NULL),(8,8,1,NULL,NULL),(9,9,1,NULL,NULL),(10,9,2,NULL,NULL),(11,10,2,NULL,NULL),(12,11,2,NULL,NULL),(13,12,1,NULL,NULL),(14,13,1,NULL,NULL),(15,13,2,NULL,NULL),(16,15,1,NULL,NULL),(17,15,2,NULL,NULL),(18,16,1,NULL,NULL);
/*!40000 ALTER TABLE `status_game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_game`
--

DROP TABLE IF EXISTS `user_game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_game` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `game_id_user` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `game_id_user_idx` (`game_id_user`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `game_id_user` FOREIGN KEY (`game_id_user`) REFERENCES `games` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=174 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_game`
--

LOCK TABLES `user_game` WRITE;
/*!40000 ALTER TABLE `user_game` DISABLE KEYS */;
INSERT INTO `user_game` VALUES (1,1,1,NULL,NULL),(2,1,2,NULL,NULL),(3,1,3,NULL,NULL),(4,1,4,NULL,NULL),(5,1,5,NULL,NULL),(6,1,6,NULL,NULL),(7,1,7,NULL,NULL),(8,2,8,NULL,NULL),(9,2,9,NULL,NULL),(10,2,10,NULL,NULL),(11,2,11,NULL,NULL),(12,2,12,NULL,NULL),(13,2,13,NULL,NULL),(14,2,14,NULL,NULL),(15,2,15,NULL,NULL),(16,3,16,NULL,NULL),(17,3,17,NULL,NULL),(18,3,18,NULL,NULL),(19,3,19,NULL,NULL),(20,3,20,NULL,NULL),(21,3,21,NULL,NULL),(22,3,22,NULL,NULL),(23,3,23,NULL,NULL),(24,3,24,NULL,NULL),(25,3,25,NULL,NULL),(26,3,26,NULL,NULL),(27,3,27,NULL,NULL),(28,3,28,NULL,NULL),(29,3,29,NULL,NULL),(30,4,30,NULL,NULL),(31,4,31,NULL,NULL),(32,4,32,NULL,NULL),(33,4,33,NULL,NULL),(34,4,34,NULL,NULL),(35,4,35,NULL,NULL),(36,4,36,NULL,NULL),(37,4,37,NULL,NULL),(38,4,38,NULL,NULL),(39,4,39,NULL,NULL),(40,4,40,NULL,NULL),(41,4,41,NULL,NULL),(42,4,42,NULL,NULL),(43,4,43,NULL,NULL),(44,4,44,NULL,NULL),(45,4,45,NULL,NULL),(46,5,46,NULL,NULL),(47,5,47,NULL,NULL),(48,5,48,NULL,NULL),(49,5,49,NULL,NULL),(50,5,50,NULL,NULL),(51,5,1,NULL,NULL),(52,5,2,NULL,NULL),(53,5,3,NULL,NULL),(54,5,4,NULL,NULL),(55,5,5,NULL,NULL),(56,5,6,NULL,NULL),(57,5,7,NULL,NULL),(58,5,8,NULL,NULL),(59,5,9,NULL,NULL),(60,5,10,NULL,NULL),(61,5,11,NULL,NULL),(62,6,12,NULL,NULL),(63,6,13,NULL,NULL),(64,6,14,NULL,NULL),(65,6,15,NULL,NULL),(66,6,16,NULL,NULL),(67,6,17,NULL,NULL),(68,6,18,NULL,NULL),(69,6,19,NULL,NULL),(70,6,20,NULL,NULL),(71,6,21,NULL,NULL),(72,6,22,NULL,NULL),(73,6,23,NULL,NULL),(74,6,24,NULL,NULL),(75,6,25,NULL,NULL),(76,6,26,NULL,NULL),(77,6,27,NULL,NULL),(78,6,28,NULL,NULL),(79,6,29,NULL,NULL),(80,6,30,NULL,NULL),(81,6,31,NULL,NULL),(82,6,32,NULL,NULL),(83,6,33,NULL,NULL),(84,7,34,NULL,NULL),(85,7,35,NULL,NULL),(86,7,36,NULL,NULL),(87,7,37,NULL,NULL),(88,7,38,NULL,NULL),(89,7,39,NULL,NULL),(90,7,40,NULL,NULL),(91,8,41,NULL,NULL),(92,8,42,NULL,NULL),(93,8,43,NULL,NULL),(94,8,44,NULL,NULL),(95,8,45,NULL,NULL),(96,8,46,NULL,NULL),(97,8,47,NULL,NULL),(98,8,48,NULL,NULL),(99,8,49,NULL,NULL),(100,8,50,NULL,NULL),(101,8,2,NULL,NULL),(102,8,3,NULL,NULL),(103,8,4,NULL,NULL),(104,8,5,NULL,NULL),(105,8,6,NULL,NULL),(106,8,7,NULL,NULL),(107,8,8,NULL,NULL),(108,9,9,NULL,NULL),(109,9,10,NULL,NULL),(110,9,11,NULL,NULL),(111,9,12,NULL,NULL),(112,9,13,NULL,NULL),(113,10,14,NULL,NULL),(114,10,15,NULL,NULL),(115,10,16,NULL,NULL),(116,10,17,NULL,NULL),(117,10,18,NULL,NULL),(118,10,19,NULL,NULL),(119,10,20,NULL,NULL),(120,11,21,NULL,NULL),(121,12,22,NULL,NULL),(122,12,23,NULL,NULL),(123,12,24,NULL,NULL),(124,12,25,NULL,NULL),(125,12,26,NULL,NULL),(126,12,27,NULL,NULL),(127,13,28,NULL,NULL),(128,13,29,NULL,NULL),(129,13,30,NULL,NULL),(130,13,31,NULL,NULL),(131,13,32,NULL,NULL),(132,13,33,NULL,NULL),(133,13,34,NULL,NULL),(134,14,35,NULL,NULL),(135,14,36,NULL,NULL),(136,14,37,NULL,NULL),(137,14,38,NULL,NULL),(138,14,39,NULL,NULL),(139,14,40,NULL,NULL),(140,14,41,NULL,NULL),(141,15,42,NULL,NULL),(142,15,43,NULL,NULL),(143,15,44,NULL,NULL),(144,15,45,NULL,NULL),(145,15,46,NULL,NULL),(146,16,47,NULL,NULL),(147,16,48,NULL,NULL),(148,16,49,NULL,NULL),(149,16,50,NULL,NULL),(150,16,1,NULL,NULL),(158,1,51,NULL,NULL),(159,2,51,NULL,NULL),(160,3,51,NULL,NULL),(161,4,51,NULL,NULL),(162,5,51,NULL,NULL),(163,6,51,NULL,NULL),(164,7,51,NULL,NULL),(165,8,51,NULL,NULL),(166,9,51,NULL,NULL),(167,10,51,NULL,NULL),(168,11,51,NULL,NULL),(169,12,51,NULL,NULL),(170,13,51,NULL,NULL),(171,14,51,NULL,NULL),(172,15,51,NULL,NULL),(173,16,51,NULL,NULL);
/*!40000 ALTER TABLE `user_game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `newsletter` tinyint(1) NOT NULL,
  `admin` tinyint(1) DEFAULT 0,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Alisander','Garfit','agarfit0@globo.com','',1,0,'mVOeeAA',NULL,NULL,NULL),(2,'Erna','Britch','ebritch1@over-blog.com','',1,0,'ivBhSkV',NULL,NULL,NULL),(3,'Ainslee','Crother','acrother2@tumblr.com','',1,0,'h4C1GRhsj06',NULL,NULL,NULL),(4,'Retha','Laffling','rlaffling3@nba.com','',1,0,'5RLGMRnbjZD',NULL,NULL,NULL),(5,'Vivianne','Cringle','vcringle4@mediafire.com','',0,0,'SZSl9L',NULL,NULL,NULL),(6,'Thibaut','Cusiter','tcusiter5@ebay.com','',0,0,'rf3Y9BbIR',NULL,NULL,NULL),(7,'Patty','Esby','pesby6@toplist.cz','',0,0,'DgL2zR6OM25',NULL,NULL,NULL),(8,'Lynsey','Ong','long7@google.com.au','',1,0,'Ya5QqNR',NULL,NULL,NULL),(9,'Haley','Haucke','hhaucke8@shinystat.com','',0,0,'8toNZs20vJQI',NULL,NULL,NULL),(10,'Rossie','Attac','rattac9@drupal.org','',1,0,'33Ywxj5Y7BId',NULL,NULL,NULL),(11,'Derward','Duling','ddulinga@123-reg.co.uk','',0,0,'Ce0c7SQ2S',NULL,NULL,NULL),(12,'Norry','Renne','nrenneb@liveinternet.ru','',1,0,'4vF1ACQbE1U',NULL,NULL,NULL),(13,'Norbie','Matskevich','nmatskevichc@ucla.edu','',0,0,'nZaswvCE3N',NULL,NULL,NULL),(14,'Creighton','Beining','cbeiningd@slate.com','',0,0,'8CtaZzIy',NULL,NULL,NULL),(15,'Melessa','Umney','mumneye@wsj.com','',1,0,'49X84k5F7Z',NULL,NULL,NULL),(16,'Ruttger','Cambling','rcamblingf@tuttocitta.it','',0,0,'grzvJax8I2',NULL,NULL,NULL),(17,'Hercules','Glasspoole','hglasspooleg@topsy.com','',0,0,'SJeK4tK62',NULL,NULL,NULL),(18,'Almeta','Extil','aextilh@ebay.com','',1,0,'kzYrKq',NULL,NULL,NULL),(19,'Clayton','Caillou','ccailloui@privacy.gov.au','',1,0,'GBHPCvse',NULL,NULL,NULL),(20,'Boot','Axup','baxupj@telegraph.co.uk','',1,0,'MnHrmmN',NULL,NULL,NULL),(21,'Jules','Herrieven','jherrievenk@japanpost.jp','',1,0,'67wqhX',NULL,NULL,NULL),(22,'William','Parriss','wparrissl@adobe.com','',0,0,'SU6rU5xyvL',NULL,NULL,NULL),(23,'Goldarina','Girkin','ggirkinm@xinhuanet.com','',1,0,'OgJ3d9',NULL,NULL,NULL),(24,'Cthrine','Brough','cbroughn@wikipedia.org','',0,0,'rJwMDrIOMGf',NULL,NULL,NULL),(25,'Emogene','Averill','eaverillo@ibm.com','',1,0,'hiYOX8PVFq',NULL,NULL,NULL),(26,'Aldous','Kemmons','akemmonsp@slate.com','',1,0,'cMl4oF5P',NULL,NULL,NULL),(27,'Gayel','Curds','gcurdsq@hc360.com','',1,0,'jUJGGWhfTLd',NULL,NULL,NULL),(28,'Erhart','Swinney','eswinneyr@printfriendly.com','',1,0,'vKnhhh',NULL,NULL,NULL),(29,'Audrey','Ollerton','aollertons@bloglovin.com','',0,0,'hZbFTZEi',NULL,NULL,NULL),(30,'Dalis','Wicher','dwichert@theglobeandmail.com','',0,0,'wedfOGL4a',NULL,NULL,NULL),(31,'Glori','Ollerton','gollertonu@youtube.com','',0,0,'LmlNCoYouH',NULL,NULL,NULL),(32,'Putnem','Vowles','pvowlesv@mashable.com','',1,0,'Qn2mGqUwJv',NULL,NULL,NULL),(33,'Ely','Bewlay','ebewlayw@addtoany.com','',0,0,'A28n6HRw',NULL,NULL,NULL),(34,'Niven','Jozsef','njozsefx@over-blog.com','',0,0,'I1ZGe3',NULL,NULL,NULL),(35,'Cass','Cadden','ccaddeny@technorati.com','',0,0,'M7fMRf',NULL,NULL,NULL),(36,'Burty','Bascomb','bbascombz@usgs.gov','',1,0,'kPCqznS',NULL,NULL,NULL),(37,'Leticia','Extill','lextill10@mashable.com','',0,0,'cxw8ll6x',NULL,NULL,NULL),(38,'Aleece','Broadbear','abroadbear11@senate.gov','',1,0,'5C7OQOgWQJ0',NULL,NULL,NULL),(39,'Tammi','Santore','tsantore12@sakura.ne.jp','',0,0,'szVFEv4k',NULL,NULL,NULL),(40,'Vanda','Rilston','vrilston13@wix.com','',0,0,'ieJ6lB',NULL,NULL,NULL),(41,'Darwin','Nurden','dnurden14@arizona.edu','',0,0,'L1yNDNTi',NULL,NULL,NULL),(42,'Nev','Philippe','nphilippe15@joomla.org','',1,0,'OdoEmY6f',NULL,NULL,NULL),(43,'Tris','Tythe','ttythe16@washingtonpost.com','',0,0,'QZIJfQF',NULL,NULL,NULL),(44,'Rubie','Rodgier','rrodgier17@privacy.gov.au','',0,0,'SBKtUAN',NULL,NULL,NULL),(45,'Biddie','Jarrett','bjarrett18@usgs.gov','',0,0,'6w2bVfe',NULL,NULL,NULL),(46,'Martica','Ney','mney19@flickr.com','',0,0,'VCJOBWeT',NULL,NULL,NULL),(47,'Dew','Craig','dcraig1a@usda.gov','',0,0,'SbxDi1x9Ubt',NULL,NULL,NULL),(48,'Kimbra','Sultana','ksultana1b@princeton.edu','',1,0,'4zfDVrDBpK4',NULL,NULL,NULL),(49,'Wilbert','Brindley','wbrindley1c@microsoft.com','',0,0,'DpfRZ15dT2ik',NULL,NULL,NULL),(50,'Windham','Garnam','wgarnam1d@etsy.com','',1,0,'hfEaoqT',NULL,NULL,NULL),(51,'admin','admin','admin','1627698902593.jpg',0,1,'$2b$10$9brKXibQBlPSF04m8lkbjeLj66uDTNyIvFYXHjNGrU6XOFlIupYhW',NULL,'2021-07-31 02:35:02','2021-07-31 02:35:02');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-31  0:38:59
