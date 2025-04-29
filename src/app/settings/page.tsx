import { FaUser, FaBell, FaLock, FaPalette, FaGlobe } from 'react-icons/fa';
import { IconType } from 'react-icons';

type SettingType = 'text' | 'email' | 'textarea' | 'toggle' | 'select' | 'color' | 'button';

interface BaseSetting {
  id: string;
  label: string;
  type: SettingType;
}

interface TextSetting extends BaseSetting {
  type: 'text' | 'email';
  value: string;
}

interface TextareaSetting extends BaseSetting {
  type: 'textarea';
  value: string;
}

interface ToggleSetting extends BaseSetting {
  type: 'toggle';
  value: boolean;
}

interface SelectSetting extends BaseSetting {
  type: 'select';
  value: string;
  options: string[];
}

interface ColorSetting extends BaseSetting {
  type: 'color';
  value: string;
}

interface ButtonSetting extends BaseSetting {
  type: 'button';
  value: string;
}

type Setting = TextSetting | TextareaSetting | ToggleSetting | SelectSetting | ColorSetting | ButtonSetting;

interface SettingsSection {
  id: string;
  title: string;
  icon: IconType;
  settings: Setting[];
}

const settingsSections: SettingsSection[] = [
  {
    id: 'profile',
    title: 'Profile Settings',
    icon: FaUser,
    settings: [
      {
        id: 'username',
        label: 'Username',
        type: 'text',
        value: 'ProGamer123',
      },
      {
        id: 'email',
        label: 'Email',
        type: 'email',
        value: 'progamer@example.com',
      },
      {
        id: 'bio',
        label: 'Bio',
        type: 'textarea',
        value: 'Professional gamer and streamer. Love playing FPS games!',
      },
    ],
  },
  {
    id: 'notifications',
    title: 'Notification Settings',
    icon: FaBell,
    settings: [
      {
        id: 'stream-notifications',
        label: 'Stream Notifications',
        type: 'toggle',
        value: true,
      },
      {
        id: 'tournament-notifications',
        label: 'Tournament Notifications',
        type: 'toggle',
        value: true,
      },
      {
        id: 'chat-notifications',
        label: 'Chat Notifications',
        type: 'toggle',
        value: false,
      },
    ],
  },
  {
    id: 'security',
    title: 'Security Settings',
    icon: FaLock,
    settings: [
      {
        id: 'two-factor',
        label: 'Two-Factor Authentication',
        type: 'toggle',
        value: false,
      },
      {
        id: 'password',
        label: 'Change Password',
        type: 'button',
        value: 'Change Password',
      },
    ],
  },
  {
    id: 'appearance',
    title: 'Appearance Settings',
    icon: FaPalette,
    settings: [
      {
        id: 'theme',
        label: 'Theme',
        type: 'select',
        value: 'dark',
        options: ['dark', 'light', 'system'],
      },
      {
        id: 'chat-color',
        label: 'Chat Color',
        type: 'color',
        value: '#ff0000',
      },
    ],
  },
  {
    id: 'language',
    title: 'Language & Region',
    icon: FaGlobe,
    settings: [
      {
        id: 'language',
        label: 'Language',
        type: 'select',
        value: 'en',
        options: ['en', 'es', 'fr', 'de', 'ja'],
      },
      {
        id: 'timezone',
        label: 'Timezone',
        type: 'select',
        value: 'UTC',
        options: ['UTC', 'EST', 'PST', 'CET', 'JST'],
      },
    ],
  },
];

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      
      <div className="space-y-8">
        {settingsSections.map((section) => {
          const Icon = section.icon;
          
          return (
            <section key={section.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-700">
                <h2 className="text-xl font-bold flex items-center">
                  <Icon className="mr-2 text-red-500" />
                  {section.title}
                </h2>
              </div>
              
              <div className="p-4 space-y-4">
                {section.settings.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between">
                    <label className="text-gray-300">{setting.label}</label>
                    
                    {setting.type === 'text' && (
                      <input
                        type="text"
                        value={setting.value}
                        className="bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    )}
                    
                    {setting.type === 'email' && (
                      <input
                        type="email"
                        value={setting.value}
                        className="bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    )}
                    
                    {setting.type === 'textarea' && (
                      <textarea
                        value={setting.value}
                        className="bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        rows={3}
                      />
                    )}
                    
                    {setting.type === 'toggle' && (
                      <button
                        className={`w-12 h-6 rounded-full relative ${
                          setting.value ? 'bg-red-500' : 'bg-gray-600'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                            setting.value ? 'translate-x-6' : ''
                          }`}
                        />
                      </button>
                    )}
                    
                    {setting.type === 'select' && (
                      <select
                        value={setting.value}
                        className="bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        {setting.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                    
                    {setting.type === 'color' && (
                      <input
                        type="color"
                        value={setting.value}
                        className="w-12 h-12 rounded-lg cursor-pointer"
                      />
                    )}
                    
                    {setting.type === 'button' && (
                      <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
                        {setting.value}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
} 