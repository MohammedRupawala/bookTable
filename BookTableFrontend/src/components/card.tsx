import { dataType } from '../types/types'

export const Card = ({inviteId,name,tableNumber} : dataType) => {
    return (
        <div className="w-80 h-40  bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-lg relative p-4 cursor-pointer hover:scale-105 transition-transform">
          <p className="absolute top-2 left-2 z-10 text-white text-sm">{inviteId}</p>
      
          <div className="flex items-center justify-center h-full 
          overflow-y-auto
          scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
            <h2 className="text-white text-xl font-semibold">{name}</h2>
          </div>
      
          <div className="absolute top-2 right-2 z-10 transform-translate-x-1/2">
            <h2 className="text-white text-md">Table: {tableNumber}</h2>
          </div>
        </div>
      );
      
}