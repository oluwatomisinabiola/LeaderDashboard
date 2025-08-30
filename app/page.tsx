const leaderboardData = [
  { id: 1, name: "Haylin Diaz", points: 15420 },
  { id: 2, name: "Jennifer Ayissi", points: 14890 },
  { id: 3, name: "Bifuh Ngongalah", points: 13675 },
  { id: 4, name: "Sarah Johnson", points: 12940 },
  { id: 5, name: "Michael Chen", points: 11825 },
  { id: 6, name: "Emily Davis", points: 10560 },
  { id: 7, name: "Alex Rodriguez", points: 9875 },
  { id: 8, name: "Lisa Wang", points: 8920 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Hey, Oluwatomisin!</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Left Column - Leaderboard */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Points Leaderboard</h3>
            <p className="text-sm text-gray-600 mb-6">
              Members ranked by total points earned from completing activities.
            </p>
            
            <div className="space-y-4">
              {leaderboardData.map((member, index) => (
                <div key={member.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-gray-700 w-6">
                      {index + 1}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-700">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{member.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{member.points.toLocaleString()} Points</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Dashboard Cards */}
        <div className="space-y-6">
          {/* Active Status Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Status</h3>
            <p className="text-sm text-gray-600 mb-6">
              You are considered active in a week if you have either sent a Slack message or reacted to a Slack message, in that week.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">This Week (8/24 - 8/30)</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 font-medium">Active</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Last 16 Weeks</h4>
                <div className="grid grid-cols-4 gap-1">
                  {[...Array(16)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-4 h-4 rounded-sm ${[3, 8].includes(i) ? 'bg-red-500' : 'bg-green-500'}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-4">
              <h4 className="text-sm font-medium text-gray-600 mb-1">Member #</h4>
              <p className="text-2xl font-bold text-gray-900">16210</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-4">
              <h4 className="text-sm font-medium text-gray-600 mb-1">Total Members</h4>
              <p className="text-2xl font-bold text-gray-900">16,945</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-4">
              <h4 className="text-sm font-medium text-gray-600 mb-1">Events Attended</h4>
              <p className="text-2xl font-bold text-gray-900">1</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-4">
              <h4 className="text-sm font-medium text-gray-600 mb-1">Messages Sent</h4>
              <p className="text-2xl font-bold text-gray-900">46</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}