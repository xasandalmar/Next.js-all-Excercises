// app/users/[username]/page.tsx
export default async function UserPage({ 
  params 
}: { 
  params: Promise<{ username: string }> 
}) {
  const { username } = await params;

  return (
    <div>
      <h1>Welcome, {username}</h1>
    </div>
  );
}

emailkayga intaad gasho waxaad fariin email ah intaad u qorto oo ah in lacagtii DugsiFile ee bisha lagu leeyahay ayna soo bixiyan waliba emailkaas oo habaysan , emailkaad u diraysana waa xasandalmardev@gmail.com