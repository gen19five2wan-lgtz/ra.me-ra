import restaurantInterior from './assets/restaurant_interior.png'
import crabPasta from './assets/crab_pasta.png'
import masuWine from './assets/masu_wine.png'
import drinkBar from './assets/drink_bar.png'

function App() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Napule inspired */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={restaurantInterior}
            alt="La Mela Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              La Mela
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              ラ・メーラ
            </p>
            <div className="w-16 h-px bg-white/40 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              三鷹で愛されるLa Mela（ラ・メーラ）は、学生寮のオーナーが営む温かい雰囲気のイタリアンレストランです。家庭的でありながら本格的なイタリア料理を、リラックスした空間でお楽しみいただけます。
            </p>
          </div>
        </div>
      </section>

      {/* Greeting Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-tent-700" style={{ fontFamily: 'Playfair Display, serif' }}>
            La Mela<br />
            <span className="text-2xl md:text-3xl text-gray-600">ラ・メーラ</span>
          </h2>

          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
            <p className="mb-6">
              三鷹で愛されるLa Mela（ラ・メーラ）は、学生寮のオーナーが営む<br />
              温かい雰囲気のイタリアンレストランです。
            </p>
            <p className="mb-6">
              家庭的でありながら本格的なイタリア料理を、<br />
              リラックスした空間でお楽しみいただけます。
            </p>
            <p>
              新鮮な食材を使った自慢のパスタや、厳選されたワインとともに、<br />
              心温まるひとときをお過ごしください。
            </p>
          </div>
        </div>
      </section>

      {/* Access & Hours Section - Napule inspired clean layout */}
      <section id="access" className="py-20 md:py-32 bg-cream/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Address */}
            <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-12 md:pb-0 md:pr-16">
              <h3 className="text-xl font-bold mb-6 text-gray-800">住所</h3>
              <p className="text-gray-600 mb-2">〒XXX-XXXX</p>
              <p className="text-gray-800 mb-4 leading-relaxed">
                東京都三鷹市大通区久屋大通1-21-1
              </p>
              <p className="text-sm text-gray-500">
                ※駐車場のご用意はございませんので、ご了承ください。
              </p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-800">営業時間</h3>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">平日・土日祝</p>
                  <p className="text-gray-600">Lunch<br />11:30~14:30 (L.O.14:00)</p>
                  <p className="text-gray-600 mt-2">Dinner<br />17:30~22:00 (L.O.21:30)</p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="font-semibold text-gray-800 mb-2">定休日</p>
                  <p className="text-gray-600">月曜日</p>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                ※営業時間は変更することがございます。
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('access')}
              className="px-8 py-4 bg-red-tent-700 text-white font-semibold hover:bg-red-tent-800 transition-colors"
            >
              ACCESS
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-deep-wine-700 text-white font-semibold hover:bg-deep-wine-800 transition-colors"
            >
              お問い合わせ
            </button>
          </div>
        </div>
      </section>

      {/* SNS Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-tent-700" style={{ fontFamily: 'Playfair Display, serif' }}>
            SNS
          </h2>
          <p className="text-gray-600 mb-12">
            こちらから店の最新情報をご確認ください
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity rounded-lg shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-10 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors rounded-lg shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Menu Section - À LA CARTE style */}
      <section id="menu" className="py-20 md:py-32 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-red-tent-700" style={{ fontFamily: 'Playfair Display, serif' }}>
            À LA CARTE
          </h2>
          <p className="text-center text-gray-600 mb-16">
            自慢のシグネチャーメニュー
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Crab Pasta */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={crabPasta}
                  alt="Crab Pasta"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-tent-700 mb-3">カニのパスタ</h3>
                <p className="text-gray-600 leading-relaxed">
                  新鮮なカニをふんだんに使用したクリームソースパスタ。濃厚な味わいが特徴の一品です。
                </p>
              </div>
            </div>

            {/* Masu Wine */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={masuWine}
                  alt="Masu Wine"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-tent-700 mb-3">マスワイン</h3>
                <p className="text-gray-600 leading-relaxed">
                  厳選された日本のマスワイン。深い赤い色と豊かな香りをお楽しみください。
                </p>
              </div>
            </div>

            {/* Drink Bar */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={drinkBar}
                  alt="Lunch Drink Bar"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-tent-700 mb-3">ランチドリンクバー</h3>
                <p className="text-gray-600 leading-relaxed">
                  ランチタイムには、種類豊富なドリンクバーをご用意。コーヒー、ジュース、ソフトドリンクなど。
                </p>
              </div>
            </div>
          </div>

          {/* Course Menu */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-red-tent-700" style={{ fontFamily: 'Playfair Display, serif' }}>
              COURSE
            </h2>
            <p className="text-center text-gray-600 mb-16">
              特別な日のお食事に
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Lunch Course */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6 pb-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-red-tent-700 mb-2">ランチコース</h3>
                  <p className="text-3xl font-bold text-deep-wine-700">¥2,800</p>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>• 本日の前菜</li>
                  <li>• 季節のパスタ</li>
                  <li>• メイン料理</li>
                  <li>• ドルチェ</li>
                  <li>• コーヒーまたは紅茶</li>
                </ul>
              </div>

              {/* Dinner Course */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6 pb-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-red-tent-700 mb-2">ディナーコース</h3>
                  <p className="text-3xl font-bold text-deep-wine-700">¥4,500</p>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>• アミューズブーシュ</li>
                  <li>• 前菜の盛り合わせ</li>
                  <li>• 本日のパスタ</li>
                  <li>• 魚または肉のメイン</li>
                  <li>• デザート</li>
                  <li>• 食後のドリンク</li>
                </ul>
              </div>

              {/* Chef's Special */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-red-tent-700">
                <div className="text-center mb-6 pb-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-red-tent-700 mb-2">シェフのおまかせ</h3>
                  <p className="text-3xl font-bold text-deep-wine-700">¥6,800</p>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>• 季節の前菜3種</li>
                  <li>• スペシャルパスタ</li>
                  <li>• 本日の鮮魚料理</li>
                  <li>• 厳選肉のメイン</li>
                  <li>• 自家製ドルチェ</li>
                  <li>• カフェとプチ菓子</li>
                </ul>
              </div>
            </div>

            <p className="text-center text-sm text-gray-500 mt-12">
              ※コース内容は季節により変更になる場合がございます
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-red-tent-700" style={{ fontFamily: 'Playfair Display, serif' }}>
            お問い合わせ
          </h2>

          <div className="bg-cream/30 p-8 md:p-12 rounded-lg">
            <p className="text-lg text-gray-700 mb-6">
              ご予約・お問い合わせは下記よりお気軽にご連絡ください
            </p>

            <div className="space-y-6 text-gray-600">
              <div>
                <p className="font-semibold text-gray-800 mb-2">住所</p>
                <p>東京都三鷹市大通区久屋大通1-21-1</p>
              </div>

              <div>
                <p className="font-semibold text-gray-800 mb-2">営業時間</p>
                <p>Lunch: 11:30~14:30</p>
                <p>Dinner: 17:30~22:00</p>
                <p className="text-sm mt-2">定休日: 月曜日</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-tent-900 via-deep-wine-900 to-warm-brown-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              La Mela
            </h3>
            <div className="flex justify-center gap-6 mb-6">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-warm-brown-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-warm-brown-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-warm-brown-300">
              © 2026 La Mela. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Fixed CTA Bar - Napule inspired */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-gradient-to-r from-red-tent-700 to-deep-wine-700 shadow-2xl z-50">
        <div className="grid grid-cols-2 divide-x divide-white/20">
          <button
            onClick={() => scrollToSection('access')}
            className="flex items-center justify-center gap-2 py-4 text-white font-semibold transition-all duration-300 active:bg-white/20"
          >
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>ACCESS</span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center justify-center gap-2 py-4 text-white font-semibold transition-all duration-300 active:bg-white/20"
          >
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span>WEB予約</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
