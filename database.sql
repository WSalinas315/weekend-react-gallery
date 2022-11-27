CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(256) NOT NULL,
	"description" VARCHAR (256) NOT NULL,
	"likes" INT
);

INSERT INTO "gallery" ("path", "description", "likes")
VALUES
	('images/goat_small.jpg','Photo of a goat taken at Glacier National Park.',0),
	('images/dirtbike.jpeg','Riding through a meadow with a childhood friend.',0); 