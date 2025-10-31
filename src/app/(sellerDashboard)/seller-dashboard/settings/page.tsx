
import AccountSettingsPage from "@/app/components/seller-dashbaord/settings/account";
import NotificationPreferencesPage from "@/app/components/seller-dashbaord/settings/notifications";


export default function Page() {
  return (
    <div>
      <NotificationPreferencesPage/>
      <AccountSettingsPage/>
    </div>
  );
}