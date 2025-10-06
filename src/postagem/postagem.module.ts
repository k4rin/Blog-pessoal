import { TemaModule } from './../tema/tema.module';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemController } from "./controllers/postagem.controller";
import { PostagemService } from "./services/postagem.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Postagem]), TemaModule
    ],
    providers: [PostagemService],
    controllers: [PostagemController], 
    exports: [],
})
export class PostagemModule {}