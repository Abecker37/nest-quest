import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateArticleTable1709553733944 implements MigrationInterface {
    name = 'CreateArticleTable1709553733944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`article\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(50) NOT NULL, \`content\` varchar(100) NOT NULL, \`author\` varchar(50) NOT NULL, \`creationDate\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`article\``);
    }

}
