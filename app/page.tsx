export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#020617] text-white">
      <div className="w-[400px] bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/10">
        <h1 className="text-2xl font-bold text-center text-blue-500">
          SANCHARAKSHIT
        </h1>
        <p className="text-center text-gray-400 mb-6">
          The Fortress of Digital Assets
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
}
