"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "./FilterSidebar";


interface MobileFilterSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MobileFilterSheet({
  open,
  onOpenChange,
}: MobileFilterSheetProps) {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={() => onOpenChange(false)}
      />

      {/* Sheet */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background z-50 overflow-y-auto lg:hidden">
        <div className="sticky top-0 flex items-center justify-between p-4 border-b border-border bg-card">
          <h2 className="text-lg font-semibold text-foreground">Filters</h2>
          <button
            onClick={() => onOpenChange(false)}
            className="p-2 hover:bg-muted rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4">
          <Sidebar />
        </div>

        <div className="sticky bottom-0 p-4 border-t border-border bg-card flex gap-2">
          <Button
            variant="outline"
            className="flex-1 bg-transparent"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
            onClick={() => onOpenChange(false)}
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </>
  );
}
