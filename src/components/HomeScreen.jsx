import React from 'react';
import { User, MessageCircle, Search, MoreHorizontal, ShoppingBag, Activity, Wallet, BarChart2, Car, TrendingUp, CreditCard, Grid, Home, DollarSign, Gift } from 'lucide-react';

const HomeScreen = ({ userName, onChatOpen }) => {
  return (
    <div className="flex flex-col w-full h-screen bg-custom-bg text-white font-sans overflow-hidden">
      <div className="flex-1 px-4 pt-12 pb-16 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-gray-600" />
          </div>
          <MessageCircle className="w-6 h-6" onClick={onChatOpen} />
        </div>

        <h1 className="text-3xl font-semibold mb-6">Hi {userName}</h1>

        <div className="bg-custom-gray rounded-lg flex items-center px-4 py-3 mb-6">
          <Search className="w-5 h-5 mr-2 text-gray-400" />
          <input
            type="text"
            placeholder='Search "PayID"'
            className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none text-base"
          />
        </div>

        <div className="bg-custom-yellow rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-black text-lg">Smart Access</span>
            <MoreHorizontal className="text-black" />
          </div>
          <div className="flex justify-between items-end">
            <span className="text-3xl font-bold text-black">$0.23</span>
            <span className="text-black text-sm">Balance $69.45</span>
          </div>
        </div>

        <div className="flex justify-between items-center py-3 border-b border-gray-700 mb-6">
          <span className="text-base">Smart Access</span>
          <span className="text-base">$0.10</span>
        </div>

        <div className="grid grid-cols-4 gap-x-4 gap-y-6 mb-6">
          {[
            { icon: <ShoppingBag size={24} />, label: 'Offers', color: 'text-custom-yellow' },
            { icon: <Activity size={24} />, label: 'Credit score', color: 'text-custom-yellow' },
            { icon: <Wallet size={24} />, label: 'Cardless Cash', color: 'text-custom-yellow' },
            { icon: <BarChart2 size={24} />, label: 'Cash flow', color: 'text-custom-yellow' },
            { icon: <Car size={24} />, label: 'Explore cars' },
            { icon: <TrendingUp size={24} />, label: 'Investing' },
            { icon: <CreditCard size={24} />, label: 'Apply for a product', disabled: true },
            { icon: <Grid size={24} />, label: 'View all features', disabled: true },
          ].map((item, index) => (
            <div key={index} className={`flex flex-col items-center ${item.disabled ? 'opacity-50' : ''}`}>
              <div className={`w-14 h-14 bg-custom-gray rounded-lg flex items-center justify-center mb-2 ${item.color || ''}`}>
                {item.icon}
              </div>
              <span className="text-xs text-center">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="rounded-lg overflow-hidden mb-6">
          <img src="/api/placeholder/400/150" alt="Promotional content" className="w-full" />
        </div>
      </div>

      <div className="flex justify-between items-center px-6 py-3 bg-black border-t border-gray-800">
        {[
          { icon: <Home size={24} />, label: 'Home', active: true },
          { icon: <CreditCard size={24} />, label: 'Accounts' },
          { icon: <DollarSign size={24} />, label: 'Pay' },
          { icon: <CreditCard size={24} />, label: 'Cards' },
          { icon: <Gift size={24} />, label: 'CBA Yello' },
        ].map((item, index) => (
          <div key={index} className={`flex flex-col items-center ${item.active ? 'text-custom-yellow' : 'text-gray-400'}`}>
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;