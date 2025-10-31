"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, Info } from "lucide-react"; // Import icons for visual elements

export default function SettingsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPasswords((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleChangePassword = () => {
    console.log("Password Change Attempt:", passwords);

    if (passwords.newPassword !== passwords.confirmNewPassword) {
      alert("New password and confirmation do not match.");
      return;
    }

    // shofikul vai call the api here

    setPasswords({
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
    setIsDialogOpen(false);
  };

  return (
    <div>
      <div className="w-full mx-auto p-6 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Profile & Settings
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Profile <span className="text-gray-400">›</span> Account Settings
          </p>
        </div>

        <hr className="border-gray-200" />

        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Security</h2>
            <p className="text-sm text-gray-500 mt-1">
              Manage your account security settings
            </p>
          </div>

          <Button
            variant="outline"
            className="border-teal-500 cursor-pointer text-teal-600 hover:bg-teal-50 hover:text-teal-700 
                       focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
                       font-medium text-sm px-4 py-2 rounded-md"
            onClick={() => setIsDialogOpen(true)}
          >
            Change Password
          </Button>
        </div>
      </div>

      {/* dialog - vai you may separate this component - for now i will keep it here */}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              Password
              <Info className="w-4 h-4 text-gray-400" />
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            {/* Old Password */}
            <div className="grid gap-2">
              <Label htmlFor="oldPassword">Old Password</Label>
              <div className="relative">
                <Input
                  id="oldPassword"
                  type="password"
                  placeholder="Input your old password"
                  value={passwords.oldPassword}
                  onChange={handleInputChange}
                  className="pr-10"
                />
                <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer" />
              </div>
            </div>

            {/* New Password */}
            <div className="grid gap-2">
              <Label htmlFor="newPassword">New Password</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type="password"
                  placeholder="Input your new password"
                  value={passwords.newPassword}
                  onChange={handleInputChange}
                  className="pr-10"
                />
                <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Min 8 Characters with a combination of letters and numbers
              </p>
            </div>

            {/* Confirmation New Password */}
            <div className="grid gap-2">
              <Label htmlFor="confirmNewPassword">
                Confirmation New Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmNewPassword"
                  type="password"
                  placeholder="confirmation your new password"
                  value={passwords.confirmNewPassword}
                  onChange={handleInputChange}
                  className="pr-10"
                />
                <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer" />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="submit"
              onClick={handleChangePassword}
              className="bg-teal-600 hover:bg-teal-700 cursor-pointer"
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
