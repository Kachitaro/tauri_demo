"use client";
export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-2 sm:px-4">
        <div className="col-auto">
          <p>©{new Date().getFullYear()} - Nexpando. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
