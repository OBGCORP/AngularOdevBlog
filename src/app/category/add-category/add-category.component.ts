import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  categories: Category[] = [];
  category: Category = {
    categoryId: 0,
    name: "",
    creationDate: ""
  }

  constructor(private categoryService: CategoryService, private router: Router) {
    this.categoryService.setCategories();
  }

  handleAddCategory() {
    this.category.categoryId = this.categoryService.getCategories()[this.categoryService.getCategories().length - 1].categoryId + 1;
    this.categoryService.addCategory(this.category);
    this.router.navigateByUrl("/category-list");
  }

  handleCancelAdd() {
    this.router.navigateByUrl("/category-list");
  }
}
