import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Navbar } from './navbar';
import { AuthService } from '@micclo-tm/domain';
import { MockAuthService } from '../mocks/mock-auth.service';

describe('Navbar', () => {
  let fixture: ComponentFixture<Navbar>;
  let mockAuthService: MockAuthService;

  beforeEach(async () => {
    mockAuthService = new MockAuthService();

    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    fixture.detectChanges(); // trigger Angular change detection
  });

  it('should show Login button when not authenticated', () => {
    mockAuthService.isAuthenticated.set(false);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const loginButton = compiled.querySelector('button');

    expect(loginButton?.textContent).toContain('Login');
  });

  it('should show Logout button when  authenticated', () => {
    mockAuthService.isAuthenticated.set(true);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const logoutButton = compiled.querySelector('button');

    expect(logoutButton?.textContent).toContain('Logout');
  });
});
