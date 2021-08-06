import { Migration } from '@mikro-orm/migrations';

export class Migration20210617181925 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "created_at" text not null, "updated_at" text not null, "username" text not null, "email" text not null, "salt" text not null, "password" text not null, "is_super_admin" bool not null default false);');
    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
  }

}
