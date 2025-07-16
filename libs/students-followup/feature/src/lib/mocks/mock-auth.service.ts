import { signal } from '@angular/core';
import { vi } from 'vitest';

export class MockAuthService {
    private _isAuthenticated = signal(false);
    isAuthenticated = this._isAuthenticated;

    login = vi.fn(() => this._isAuthenticated.set(true));
    logout = vi.fn(() => this._isAuthenticated.set(false));
}
