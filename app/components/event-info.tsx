export function EventInfo() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm">
      <h2 className="text-3xl font-bold text-gray-800">開催情報</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {/* 開催日時 */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">開催日時</h3>
          <p className="text-lg text-gray-600 mb-1">2025年9月27日（土）- 28日（日）</p>
          <p className="text-lg text-gray-600">両日とも 11:00 - 19:00</p>
        </div>

        {/* 開催場所 */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">開催場所</h3>
          <p className="text-lg text-gray-600 mb-1">ラブリーパートナー エルパ</p>
          <p className="text-sm text-gray-500">1F『3COINS+plus』前</p>
        </div>
      </div>

      {/* アクセス情報 */}
      <div className="text-center mt-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">アクセス</h3>
        <p className="text-gray-600 mb-4">
          福井駅からバスで約30分
        </p>
        
        {/* Googleマップ埋め込み */}
        <div className="w-full max-w-2xl mx-auto">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25796.407116832543!2d136.21395609872445!3d36.080056930132265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8bfd5f0098d97%3A0x7743bfe77700adb9!2z44Ko44Or44ORKOODqeODluODquODvOODkeODvOODiOODiuODvCBMcGEp!5e0!3m2!1sja!2sjp!4v1751014629710!5m2!1sja!2sjp" width="400" height="300" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  )
} 