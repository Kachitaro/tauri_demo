import { ModeToggle } from "@/components/ModeToggle";
export function Header() {
  return (
    <header>
      <nav className="container py-2 ">
        <ModeToggle />
      </nav>
    </header>
  );
}
