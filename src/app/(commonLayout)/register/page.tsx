import SignUpForm from "@/app/components/auth/buyer/sign-up";
import SellerRegistration from "@/app/components/auth/seller/seller-sign-up";


type Props = {
    searchParams: Promise<Record<'role', string>>
}

export default async function RoleContinuePage({searchParams}: Props) {

    const params = await searchParams;
    const role  = params.role

    console.log(params.role)

    return (
        <div className="min-h-screen bg-white">
            {role === 'buyer' ? <SignUpForm /> : role === 'seller' ? <SellerRegistration /> : null}
        </div>
    );
}