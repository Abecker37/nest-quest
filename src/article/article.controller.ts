import {
    Controller,
    Post,
    Body,
    Get,
    Put,
    Delete,
    Param,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.entity/article.entity';
@Controller('articles')
export class ArticleController { 
    constructor(private service: ArticleService) { }
    @Get(':id')
    getArticle(@Param() params) {
        return this.service.getArticle(params.id);
    }

    @Post()
    saveArticle(@Body() article: Article) {
        return this.service.saveArticle(article);
    }

    @Put()
    updateArticle(@Body() article: Article) {
        return this.service.saveArticle(article);
    }

    @Delete(':id')
    deleteArticle(@Param() params) {
        return this.service.deleteArticle(params.id);
    }
    
}
