import { Migration } from '@mikro-orm/migrations';

export class Migration20210617155852 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "post" ("id" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "description" text not null);');
    this.addSql('alter table "post" add constraint "post_pkey" primary key ("id");');

    this.addSql('drop table if exists "undefined" cascade;');
  }

}
