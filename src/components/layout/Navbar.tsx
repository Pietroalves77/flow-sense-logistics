
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bell, Menu, X, LogIn } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

const Navbar = ({ onMenuClick, showMenuButton = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          {showMenuButton && (
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 lg:hidden"
              onClick={onMenuClick}
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          <Link to="/" className="flex items-center space-x-2">
            <div className="gradient-bg flex h-8 w-8 items-center justify-center rounded-md text-white">
              <span className="font-bold">TF</span>
            </div>
            <span className="text-xl font-bold text-trackflow-blue">
              Track<span className="text-trackflow-teal">Flow</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-trackflow-blue transition-colors">
            Home
          </Link>
          <Link to="/features" className="text-foreground hover:text-trackflow-blue transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-foreground hover:text-trackflow-blue transition-colors">
            Pricing
          </Link>
          <Link to="/contact" className="text-foreground hover:text-trackflow-blue transition-colors">
            Contact
          </Link>
          <Link to="/dashboard" className="text-foreground hover:text-trackflow-blue transition-colors">
            Dashboard
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="notification-badge">
                <Bell className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="p-4">
                <h3 className="font-medium mb-1">Notifications</h3>
                <p className="text-sm text-muted-foreground">
                  You have 3 unread notifications
                </p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="p-4 cursor-pointer">
                <div>
                  <p className="font-medium">New delivery request</p>
                  <p className="text-sm text-muted-foreground">
                    A new delivery has been assigned to your route
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">5 minutes ago</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-4 cursor-pointer">
                <div>
                  <p className="font-medium">Route optimization complete</p>
                  <p className="text-sm text-muted-foreground">
                    AI has optimized your delivery routes for today
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-4 cursor-pointer">
                <div>
                  <p className="font-medium">System update</p>
                  <p className="text-sm text-muted-foreground">
                    Track Flow has been updated to version 2.3
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="p-2 text-center text-sm cursor-pointer">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Login/Signup Button */}
          <Link to="/login">
            <Button className="hidden md:flex" variant="default">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
          </Link>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={handleMobileMenuToggle}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-50 bg-white border-b shadow-lg md:hidden transition-all duration-300 transform",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="container mx-auto py-4 px-4 flex flex-col space-y-4">
          <Link
            to="/"
            className="px-4 py-2 rounded-md hover:bg-muted transition-colors"
            onClick={handleMobileMenuToggle}
          >
            Home
          </Link>
          <Link
            to="/features"
            className="px-4 py-2 rounded-md hover:bg-muted transition-colors"
            onClick={handleMobileMenuToggle}
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="px-4 py-2 rounded-md hover:bg-muted transition-colors"
            onClick={handleMobileMenuToggle}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-md hover:bg-muted transition-colors"
            onClick={handleMobileMenuToggle}
          >
            Contact
          </Link>
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-md hover:bg-muted transition-colors"
            onClick={handleMobileMenuToggle}
          >
            Dashboard
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 gradient-bg text-white rounded-md text-center"
            onClick={handleMobileMenuToggle}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
