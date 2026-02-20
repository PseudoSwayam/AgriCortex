import { Calendar, Droplets, FlaskConical, Bug, TrendingUp, CheckCircle } from 'lucide-react';

const timeline = [
  {
    day: 1,
    title: 'Irrigation Schedule',
    description: 'Water crops in evening (6-8 PM) for optimal absorption',
    icon: Droplets,
    color: 'blue',
    status: 'completed',
  },
  {
    day: 3,
    title: 'Fertilizer Application',
    description: 'Apply NPK (17-17-17) at 60 kg/acre',
    icon: FlaskConical,
    color: 'green',
    status: 'upcoming',
  },
  {
    day: 10,
    title: 'Pest Control Spray',
    description: 'Monitor for aphid activity and apply preventive spray',
    icon: Bug,
    color: 'orange',
    status: 'upcoming',
  },
  {
    day: 20,
    title: 'Harvest Planning',
    description: 'Prepare equipment and arrange transportation',
    icon: TrendingUp,
    color: 'purple',
    status: 'upcoming',
  },
];

export default function RecommendationTimeline() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Farmer Recommendation Timeline</h2>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-200 dark:bg-gray-700" />

        {/* Timeline Items */}
        <div className="space-y-6">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            const bgColor = item.color === 'blue' ? 'bg-blue-500' 
              : item.color === 'green' ? 'bg-green-500'
              : item.color === 'orange' ? 'bg-orange-500'
              : 'bg-purple-500';
            
            const textColor = item.color === 'blue' ? 'text-blue-700' 
              : item.color === 'green' ? 'text-green-700'
              : item.color === 'orange' ? 'text-orange-700'
              : 'text-purple-700';

            return (
              <div key={index} className="relative flex items-start gap-4">
                {/* Icon Circle */}
                <div className={`relative z-10 flex-shrink-0 w-12 h-12 ${bgColor} rounded-full flex items-center justify-center text-white`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-sm font-bold ${textColor}`}>Day {item.day}</span>
                    {item.status === 'completed' && (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  
                  {item.status === 'completed' && (
                    <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      Completed
                    </span>
                  )}
                  {item.status === 'upcoming' && (
                    <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      Scheduled
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
