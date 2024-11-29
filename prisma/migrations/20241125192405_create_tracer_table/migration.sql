-- CreateTable
CREATE TABLE "tracking" (
    "id" TEXT NOT NULL,
    "campaign" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tracking_pkey" PRIMARY KEY ("id")
);
