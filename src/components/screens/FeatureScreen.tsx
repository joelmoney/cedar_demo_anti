import { CheckCircle, Zap, Shield } from 'lucide-react';
import { HighKeyframeScrollVideo } from '../HighKeyframeScrollVideo';

interface FeatureScreenProps {
  stepId: number;
}

export function FeatureScreen({ stepId }: FeatureScreenProps) {
  const features = [
    { icon: Zap, title: 'Fast', color: 'text-yellow-600 bg-yellow-100' },
    { icon: Shield, title: 'Secure', color: 'text-green-600 bg-green-100' },
    { icon: CheckCircle, title: 'Reliable', color: 'text-blue-600 bg-blue-100' },
  ];

  const feature = features[stepId % features.length];
  const Icon = feature.icon;

  return (
    <>
      <div className="h-full bg-slate-50 flex flex-col">
        <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Feature Details</h3>
          <div className="w-8 h-8 rounded-full bg-slate-200"></div>
        </div>

        <div className="flex-1 p-6 flex flex-col items-center justify-center">
          <div className={`w-24 h-24 rounded-full ${feature.color} flex items-center justify-center mb-6`}>
            <Icon className="w-12 h-12" />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            {feature.title}
          </h2>

          <p className="text-center text-slate-600 mb-8 max-w-sm">
            Experience the best-in-class performance and reliability you deserve.
          </p>

          <div className="w-full max-w-sm space-y-3">
            <div className="bg-white rounded-lg border border-slate-200 p-4 flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
              <span className="text-sm text-slate-700">All systems operational</span>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-4 flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
              <span className="text-sm text-slate-700">Optimized for performance</span>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-4 flex items-center">
              <div className="w-2 h-2 rounded-full bg-yellow-500 mr-3"></div>
              <span className="text-sm text-slate-700">Enhanced security</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto bg-white">
          <div className="text-center mb-12 bg-white pb-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Same Video... Different Encode
            </h2>
            <div className="text-slate-700 space-y-2">
              <p className="text-lg font-medium">4K Keyframe every 2 frames</p>
              <p className="text-lg">24FPS • 6sec TRT</p>
            </div>
          </div>

          <div className="bg-white">
            <HighKeyframeScrollVideo
              videoSrc="/videos/TestDataFlower_v03.5_kfEvery2frame.mov"
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
