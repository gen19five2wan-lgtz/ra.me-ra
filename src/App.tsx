import { useState, useEffect } from 'react'
import './index.css'

// Import generated images
import restaurantInterior from './assets/restaurant_interior.png'
import crabPasta from './assets/crab_pasta.png'
import masuWine from './assets/masu_wine.png'
import drinkBar from './assets/drink_bar.png'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl md:text-3xl font-bold">
              <span className="bg-gradient-to-r from-red-tent-700 to-deep-wine-700 bg-clip-text text-transparent">
                La Mela
              </span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'menu', 'gallery', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-red-tent-700 transition-colors duration-300 capitalize font-medium"
                >
                  {item === 'about' ? 'について' : item === 'menu' ? 'メニュー' : item === 'gallery' ? 'ギャラリー' : 'お問い合わせ'}
                </button>
              ))}
            </div>
            {/* Mobile Hamburger Menu */}
            <button
              className="md:hidden text-gray-700 hover:text-red-tent-700 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {['about', 'menu', 'gallery', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item)
                    setMobileMenuOpen(false)
                  }}
                  className="block w-full text-left text-gray-700 hover:text-red-tent-700 transition-colors duration-300 capitalize font-medium py-2"
                >
                  {item === 'about' ? 'について' : item === 'menu' ? 'メニュー' : item === 'gallery' ? 'ギャラリー' : 'お問い合わせ'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-red-tent-900/80 via-deep-wine-800/50 to-transparent z-10"></div>
          <img
            src={restaurantInterior}
            alt="La Mela Restaurant Interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4 fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            La Mela
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-warm-brown-100 mb-4 font-light">
            ラ・メーラ
          </p>
          <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
            三鷹の隠れ家イタリアン。温かい雰囲気でお待ちしています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('menu')}
              className="btn-primary text-lg"
            >
              メニューを見る
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-red-tent-700"
            >
              ご予約
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="slide-up">
            <h2 className="section-title">私たちについて</h2>
            <p className="section-subtitle">
              学生寮のオーナーが営む、心温まるイタリアンレストラン
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="slide-up">
              <div className="glass-card p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-red-tent-700 mb-6">
                  温かいおもてなし
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La Melaは、学生寮のオーナーが営む温かい雰囲気のイタリアンレストランです。
                  三鷹の静かな場所で、まるで家族の食卓のような親しみやすい空間を提供しています。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  新鮮な食材にこだわり、一つ一つ丁寧に作られた料理は、
                  訪れる人々の心と体を癒します。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  アットホームな雰囲気の中で、本格的なイタリア料理をお楽しみください。
                </p>
              </div>
            </div>
            <div className="slide-up">
              <img
                src={restaurantInterior}
                alt="Restaurant atmosphere"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 md:py-32 bg-gradient-to-b from-white to-red-tent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">シグネチャーメニュー</h2>
          <p className="section-subtitle">
            こだわりの食材で作る、自慢の料理をご紹介します
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Crab Pasta */}
            <div className="glass-card p-6 slide-up">
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src={crabPasta}
                  alt="Crab Pasta"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-red-tent-700 mb-3">
                カニのパスタ
              </h3>
              <p className="text-gray-700 leading-relaxed">
                新鮮なカニをふんだんに使用したクリームソースのパスタ。
                濃厚な味わいと、カニの繊細な甘みが絶妙にマッチした一品です。
              </p>
            </div>

            {/* Masu Wine */}
            <div className="glass-card p-6 slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src={masuWine}
                  alt="Masu Wine"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-red-tent-700 mb-3">
                マスワイン
              </h3>
              <p className="text-gray-700 leading-relaxed">
                厳選された日本のマスワイン。
                深い赤い色と豊かな香りで、お料理との相性も抜群です。
                特別な日のディナーにおすすめです。
              </p>
            </div>

            {/* Drink Bar */}
            <div className="glass-card p-6 slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src={drinkBar}
                  alt="Lunch Drink Bar"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-red-tent-700 mb-3">
                ランチドリンクバー
              </h3>
              <p className="text-gray-700 leading-relaxed">
                ランチタイムには、種類豊富なドリンクバーをご用意。
                コーヒー、ジュース、ソフトドリンクなど、お好きなだけお楽しみいただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Menu Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-red-tent-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-red-tent-700">
            コース料理
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            特別な日のお食事に、心を込めて作るコース料理をご用意しております
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Lunch Course */}
            <div className="glass-card p-8 slide-up">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-red-tent-700 mb-2">ランチコース</h3>
                <p className="text-3xl font-bold text-deep-wine-700">¥2,800</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-tent-600 mr-2">•</span>
                  <span>本日の前菜</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-tent-600 mr-2">•</span>
                  <span>季節のパスタ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-tent-600 mr-2">•</span>
                  <span>メイン料理</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-tent-600 mr-2">•</span>
                  <span>ドルチェ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-tent-600 mr-2">•</span>
                  <span>コーヒーまたは紅茶</span>
                </li>
              </ul>
            </div>

            {/* Dinner Course */}
            <div className="glass-card p-8 slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-red-tent-700 mb-2">ディナーコース</h3>
                <p className="text-3xl font-bold text-deep-wine-700">¥4,500</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-tent-600 mr-2">•</span>
                  <span>アミューズブーシュ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-tent-600 mr-2">•</span>
                  <span>前菜の盛り合わせ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-tent-600 mr-2">•</span>
                  <span>本日のパスタ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-tent-600 mr-2">•</span>
                  <span>魚または肉のメイン</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-tent-600 mr-2">•</span>
                  <span>デザート</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-tent-600 mr-2">•</span>
                  <span>食後のドリンク</span>
                </li>
              </ul>
            </div>

            {/* Special Course */}
            <div className="glass-card p-8 slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-red-tent-700 mb-2">シェフのおまかせ</h3>
                <p className="text-3xl font-bold text-deep-wine-700">¥6,800</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-tent-600 mr-2">•</span>
                  <span>季節の前菜3種</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-tent-600 mr-2">•</span>
                  <span>スペシャルパスタ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-tent-600 mr-2">•</span>
                  <span>本日の鮮魚料理</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-tent-600 mr-2">•</span>
                  <span>厳選肉のメイン</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-tent-600 mr-2">•</span>
                  <span>自家製ドルチェ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-tent-600 mr-2">•</span>
                  <span>カフェとプチ菓子</span>
                </li>
              </ul>
            </div>
          </div>

          {/* PDF Menu Button */}
          <div className="text-center mt-12">
            <button className="btn-secondary text-lg">
              詳細メニューを見る（PDF）
            </button>
            <p className="text-sm text-gray-500 mt-4">
              ※コース内容は季節により変更になる場合がございます
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32 bg-gradient-to-b from-red-tent-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">ギャラリー</h2>
          <p className="section-subtitle">
            お料理と店内の雰囲気をご覧ください
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[restaurantInterior, crabPasta, masuWine, drinkBar].map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SNS Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">最新情報はSNSで</h2>
          <p className="section-subtitle">
            日々の料理やお店の様子をご覧いただけます
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-12 py-6 hover:scale-105 transition-all duration-300 flex items-center gap-4 w-full sm:w-auto justify-center slide-up"
            >
              <svg className="w-8 h-8 text-red-tent-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="text-xl font-semibold text-gray-800">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-12 py-6 hover:scale-105 transition-all duration-300 flex items-center gap-4 w-full sm:w-auto justify-center slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              <svg className="w-8 h-8 text-red-tent-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-xl font-semibold text-gray-800">Facebook</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-white to-red-tent-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">アクセス・お問い合わせ</h2>
          <p className="section-subtitle">
            皆様のご来店を心よりお待ちしております
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="glass-card p-8 slide-up">
              <h3 className="text-2xl font-bold text-red-tent-700 mb-6">店舗情報</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-tent-600 mt-1 mr-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-800">住所</p>
                    <p className="text-gray-600">東京都三鷹市大通区久屋大通1-21-1</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-tent-600 mt-1 mr-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-800">営業時間</p>
                    <p className="text-gray-600">ランチ: 11:30 - 14:30</p>
                    <p className="text-gray-600">ディナー: 17:30 - 22:00</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-tent-600 mt-1 mr-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-800">電話</p>
                    <p className="text-gray-600">お問い合わせください</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold text-red-tent-700 mb-6">ご予約・お問い合わせ</h3>
              <p className="text-gray-700 mb-6">
                ご予約、お問い合わせはお電話にて承っております。
                お気軽にお問い合わせください。
              </p>
              <div className="space-y-4">
                <button className="btn-primary w-full">
                  ご予約はこちら
                </button>
                <button className="btn-secondary w-full">
                  メニュー詳細
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-6 text-center">
                定休日: 月曜日
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-tent-900 via-deep-wine-900 to-warm-brown-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">La Mela</h3>
            <p className="text-warm-brown-200 mb-6">
              温かいおもてなしで、皆様をお待ちしております
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="hover:text-warm-brown-300 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="hover:text-warm-brown-300 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-warm-brown-300">
              © 2026 La Mela. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Fixed CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-gradient-to-r from-red-tent-700 to-deep-wine-700 shadow-2xl z-40">
        <div className="grid grid-cols-2 divide-x divide-white/20">
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center justify-center gap-2 py-4 text-white font-semibold transition-all duration-300 active:bg-white/20"
          >
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>アクセス</span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center justify-center gap-2 py-4 text-white font-semibold transition-all duration-300 active:bg-white/20"
          >
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span>ご予約</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
