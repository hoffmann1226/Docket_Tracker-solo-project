
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
VALUES ('Hoffmann v. Prime', 'Hearing for Motion to Dismiss', '2020-08-20', 'Courtroom C103 at 1pm.  No colorable argument on behalf of defendant, should easily survive.', 1),
('Johnson v. Prime', 'Statute of limitations', '2020-10-23', 'Advise client so information is gathered in time to file case.  Likely large award at stake.', 1),
('Joachim v. Prime', 'Discovery Responses Due', '2020-08-22', 'Follow up with client on interrogatory 3', 1),
('Stiff v. Prime', 'Motions in Limine Due', '2020-08-25', 'Consult with client', 1),
('Wilcoxon v. Prime', 'Trial Ready Date', '2020-08-23', 'Firm trial date, judge is sick of granting continuances, threatened opposing counsel with sanctions if they try to move the date again.', 1),
('Reyes v. Prime', 'Discovery Responses Due', '2020-09-29', 'Follow up with client about earnings history.  Need to corroborate allegations made in complaint.', 1),
('Simonelli v. Prime', 'Motions in Limine Due', '2020-08-25', 'Consult with client, issue with hearsay regarding purported acceptance of offer.', 1);

SELECT * FROM "event_info";