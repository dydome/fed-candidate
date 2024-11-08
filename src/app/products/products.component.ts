// src/app/products/products.component.ts
import { Component } from '@angular/core';
import { products } from '../mocks/products';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
    productList: any = products; // Assign the imported products to a property
    sortedProducts: any = [...this.productList]; // Initialize with original products
    selectedSize = '';
    isGridView = true;

    // Sort products based on the selected option
    onSortChange(event: Event) {
        const value = (event.target as HTMLSelectElement).value;
        switch (value) {
            case 'priceAsc':
                this.sortedProducts = [...this.productList].sort(
                    (a, b) => this.extractPrice(a.price) - this.extractPrice(b.price),
                );
                break;
            case 'priceDesc':
                this.sortedProducts = [...this.productList].sort(
                    (a, b) => this.extractPrice(b.price) - this.extractPrice(a.price),
                );
                break;
            case 'rating':
                this.sortedProducts = [...this.productList].sort((a, b) => b.rating - a.rating);
                break;
            case 'relevant':
            default:
                this.sortedProducts = [...this.productList];
                break;
        }
    }

    toggleLayout() {
        this.isGridView = !this.isGridView;
    }

    onSizeChange(event: Event) {
        const target = event.target as HTMLSelectElement;
        this.selectedSize = target.value;
        this.applySizeFilter();
    }

    getUniqueSizes(): string[] {
        return [...new Set(this.productList.map((product: any) => product.size))] as string[];
    }

    getFullStars(rating: number): number[] {
        return new Array(Math.floor(rating));
    }

    protected applySizeFilter() {
        this.sortedProducts = this.selectedSize
            ? this.productList.filter((product: any) => product.size === this.selectedSize)
            : [...this.productList];
    }

    protected extractPrice(price: string): number {
        return parseFloat(price.replace(/[^0-9.-]+/g, '')) || 0; // Remove any non-numeric characters and convert to number
    }
}
