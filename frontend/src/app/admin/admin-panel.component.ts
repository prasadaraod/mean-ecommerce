import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  products: any[] = [];
  users: any[] = [];
  orders: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadUsers();
    this.loadOrders();
  }

  loadProducts(): void {
    this.adminService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  loadUsers(): void {
    this.adminService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  loadOrders(): void {
    this.adminService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }

  deleteProduct(productId: string): void {
    this.adminService.deleteProduct(productId).subscribe(() => {
      this.loadProducts();
    });
  }

  deleteUser(userId: string): void {
    this.adminService.deleteUser(userId).subscribe(() => {
      this.loadUsers();
    });
  }

  deleteOrder(orderId: string): void {
    this.adminService.deleteOrder(orderId).subscribe(() => {
      this.loadOrders();
    });
  }
}