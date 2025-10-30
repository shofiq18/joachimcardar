
 // your data function

interface Props {
  params: { id: string };
}

export default async function CarDetailPage({ params }: Props) {
    const id =params.id
 

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-6 my-12">
      <h1>{id}</h1>
      {/* Add more details as needed */}
    </div>
  );
}