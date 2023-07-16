import { Injectable } from '@angular/core';
import { Category } from './category';
import { mock_categories } from 'src/assets/mock_categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[] = [];

  constructor() {
    this.setCategories();
   }

  getCategories(): Category[] {
    return this.categories;
  }

  setCategories() {
    this.categories = mock_categories;
  }

  deleteCategory(id: number) {
    this.categories = this.categories.filter((category) => category.categoryId !== id);
  }

  findCategoryById(id: Number): Category | undefined {
    return this.categories.find((category) => category.categoryId === Number(id));
  }

  addCategory(category: Category) {
    this.categories.push(category);
  }
}
