CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(256) NOT NULL,
	"description" VARCHAR (256) NOT NULL,
	"likes" INT
);

INSERT INTO "gallery" ("path", "description", "likes")
VALUES
	('images/music.jpg','This was from a memorable Ghost concert. I still think back on it fondly.',630),
	('images/hammock.jpg','I love roughing it while camping. For quite a few years I did not even use a tent!',0),
	('images/fishing.jpg','The water was like glass and the sunrise colors were incredible at Rainy Lake while fishing with my dad at 5am.',14),
	('images/dirtbike.jpeg','Riding through a meadow with a childhood friend. BRAPP BRAPP!',1);