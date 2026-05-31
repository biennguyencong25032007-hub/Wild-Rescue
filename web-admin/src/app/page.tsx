'use client';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Wild Rescue Admin</h1>
        <p className="text-gray-600 mb-8">Ứng dụng quản lý giải cứu động vật hoang dã</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-6 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">📊 Dashboard</h2>
            <p className="text-sm text-gray-600">Theo dõi thống kê tổng hợp</p>
          </div>
          
          <div className="p-6 bg-green-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">📋 Báo cáo</h2>
            <p className="text-sm text-gray-600">Quản lý các báo cáo động vật</p>
          </div>
          
          <div className="p-6 bg-purple-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">🏥 Bệnh viện</h2>
            <p className="text-sm text-gray-600">Quản lý bệnh viện thú y</p>
          </div>
        </div>
      </div>
    </main>
  );
}
