import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="py-8 bg-card border-t border-primary/10">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex flex-col items-center gap-4">
            <Logo />
            <p>© {new Date().getFullYear()} Gold Assessoria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
