import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrations1710371469035 implements MigrationInterface {
    name = 'NewMigrations1710371469035'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todo" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying, "status" "public"."todo_status_enum" NOT NULL DEFAULT 'pending', "createdOn" date NOT NULL, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todo"`);
    }

}
