import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaModule } from "src/tema/tema.module";
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