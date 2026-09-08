CREATE TABLE IF NOT EXISTS "shops" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"shop_name" varchar(255) NOT NULL,
	"initial" varchar(50),
	"email" varchar(255),
	"phone" varchar(50),
	"shop_logo" varchar(255),
	"shop_cover" varchar(255),
	"code" varchar(50),
	"latitude" double precision NOT NULL,
	"longitude" double precision NOT NULL,
	"shop_type" text,
	"open_status" varchar(50) DEFAULT 'Open',
	"created_at" varchar(20),
	"updated_at" varchar(20)
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "shops_spatial_idx" ON "shops" USING btree ("latitude","longitude");
