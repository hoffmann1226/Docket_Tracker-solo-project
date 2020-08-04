
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "event_info" (
    "id" SERIAL PRIMARY KEY,
    "case" VARCHAR (100) NOT NULL,
    "event" VARCHAR (100) NOT NULL,
    "due_date" DATE,
    "details" VARCHAR (200) NOT NULL,
    "user_id" integer REFERENCES "user"
);


INSERT INTO "event_info" ("case", "event", "due_date", "details", "user_id")
VALUES ('Hoffmann v. Prime', 'Hearing for Motion to Dismiss', '2020-08-20', 'Difficult judge', 1),
('Johnson v. Prime', 'Oral Argument', '2020-08-22', 'In courtroom 101B', 1),
('Joachim v. Prime', 'Discovery Responses Due', '2020-08-22', 'Follow up with client on interrogatory 3', 1),
('Stiff v. Prime', 'Motions in Limine Due', '2020-08-25', 'Consult with client', 1);

SELECT * FROM "event_info";