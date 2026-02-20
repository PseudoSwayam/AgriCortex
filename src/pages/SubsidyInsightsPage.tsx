import { IndianRupee, CheckCircle, Clock, FileCheck, Award, TrendingUp } from 'lucide-react';

const subsidySchemes = [
  {
    name: 'PM-Kisan Direct Benefit Transfer',
    amount: '₹6,000/year',
    status: 'Eligible',
    statusColor: 'green',
    description: 'Annual income support in three equal installments',
    nextAction: 'Auto-credited quarterly',
    icon: Award,
  },
  {
    name: 'Soil Health Card Scheme',
    amount: '₹190 savings',
    status: 'Active',
    statusColor: 'green',
    description: 'Free soil testing and nutrient management advice',
    nextAction: 'Renewal due in 45 days',
    icon: FileCheck,
  },
  {
    name: 'Fertilizer Subsidy (NPK)',
    amount: '₹1,640/season',
    status: 'Claimable',
    statusColor: 'blue',
    description: 'Direct subsidy on fertilizer purchase',
    nextAction: 'Submit bills by March 31st',
    icon: TrendingUp,
  },
  {
    name: 'Drip Irrigation Subsidy',
    amount: '₹42,000 (50%)',
    status: 'Pending',
    statusColor: 'orange',
    description: 'Micro-irrigation system installation support',
    nextAction: 'Application under review',
    icon: Clock,
  },
];

const estimatedSavings = {
  currentSeason: 7830,
  annual: 31320,
  twoYear: 94000,
};

export default function SubsidyInsightsPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Government Subsidy Insights</h1>
        <p className="text-gray-600 dark:text-gray-400">Track eligible schemes and maximize your agricultural benefits</p>
      </div>

      {/* Savings Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <IndianRupee className="w-5 h-5" />
            <p className="text-sm font-medium opacity-90">Current Season</p>
          </div>
          <p className="text-3xl font-bold">₹{estimatedSavings.currentSeason.toLocaleString()}</p>
          <p className="text-sm mt-1 opacity-75">Subsidies claimed</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <IndianRupee className="w-5 h-5" />
            <p className="text-sm font-medium opacity-90">Annual Estimate</p>
          </div>
          <p className="text-3xl font-bold">₹{estimatedSavings.annual.toLocaleString()}</p>
          <p className="text-sm mt-1 opacity-75">Total yearly benefits</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <IndianRupee className="w-5 h-5" />
            <p className="text-sm font-medium opacity-90">2-Year Projection</p>
          </div>
          <p className="text-3xl font-bold">₹{estimatedSavings.twoYear.toLocaleString()}</p>
          <p className="text-sm mt-1 opacity-75">Including drip irrigation</p>
        </div>
      </div>

      {/* Subsidy Schemes */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Available Schemes</h2>
        
        {subsidySchemes.map((scheme, index) => {
          const Icon = scheme.icon;
          const statusBg = scheme.statusColor === 'green' ? 'bg-green-100 text-green-700'
            : scheme.statusColor === 'blue' ? 'bg-blue-100 text-blue-700'
            : 'bg-orange-100 text-orange-700';

          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <div className={`p-3 rounded-lg ${
                    scheme.statusColor === 'green' ? 'bg-green-100'
                    : scheme.statusColor === 'blue' ? 'bg-blue-100'
                    : 'bg-orange-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      scheme.statusColor === 'green' ? 'text-green-600'
                      : scheme.statusColor === 'blue' ? 'text-blue-600'
                      : 'text-orange-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{scheme.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{scheme.description}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusBg}`}>
                  {scheme.status}
                </span>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Benefit Amount</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">{scheme.amount}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Next Action</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{scheme.nextAction}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">Maximize Your Benefits</h3>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Keep your Aadhaar linked to bank account and maintain accurate land records to ensure smooth subsidy transfers. 
              Visit your nearest agriculture office for assistance with applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
