import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedCompletedColumn1710372437052 implements MigrationInterface {
    name = 'AddedCompletedColumn1710372437052'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" RENAME COLUMN "status" TO "completed"`);
        await queryRunner.query(`ALTER TYPE "public"."todo_status_enum" RENAME TO "todo_completed_enum"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "completed"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "completed" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "completed"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "completed" "public"."todo_completed_enum" NOT NULL DEFAULT 'pending'`);
        await queryRunner.query(`ALTER TYPE "public"."todo_completed_enum" RENAME TO "todo_status_enum"`);
        await queryRunner.query(`ALTER TABLE "todo" RENAME COLUMN "completed" TO "status"`);
    }

}
